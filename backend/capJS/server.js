var snoowrap = require('snoowrap');
var express = require("express");
var bodyParser = require('body-parser');
var logger = require('express-logger');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var inspect = require('util-inspect');
var oauth = require('oauth');
var reddit_config = require('./reddit_config.js');
var twitter_config = require('./twitter_config.js');
var twit = require('twit');
var twitter = new twit(twitter_config);

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger({ path: "log/express.log"}));
app.use(session({ secret: "secret word", resave: false, saveUninitialized: true}));

app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
  });
  
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    next();
});

//Reddit Setup

//create reddit
// Alternatively, just pass in a username and password for script-type apps.
const reddit = new snoowrap({
    userAgent: 'Capstone',
    clientId: reddit_config.clientId,
    clientSecret: reddit_config.clientSecret,
    refreshToken: reddit_config.refreshToken,
  });

//Twitter setup

var twitter_options = { screen_name: 'MSD_Project', count: 20};

// Get your credentials here: https://dev.twitter.com/apps
var _twitterConsumerKey = twitter_config.consumer_key;
var _twitterConsumerSecret = twitter_config.consumer_secret;

var consumer = new oauth.OAuth(
    "https://twitter.com/oauth/request_token", "https://twitter.com/oauth/access_token", 
    _twitterConsumerKey, _twitterConsumerSecret, "1.0A", "http://localhost:8080/sessions/callback", "HMAC-SHA1");

// app.get('/', function(req, res){});

//Reddit routes
app.get('/reddit_callback', function(req, res){
    res.redirect('https://www.google.com');
});

app.get('/reddit_login', function(req, res){
    var authenticationUrl = snoowrap.getAuthUrl({
        clientId: reddit_config.clientId,
        scope: ['edit', 'mysubreddits', 'read', 'submit', 'vote'],
        redirectUri: 'http://localhost:8080/reddit_callback',
        permanent: false,
        state: 'randomstring' // a random string, this could be validated when the user is redirected back
    });
    console.log(authenticationUrl);
    res.redirect(authenticationUrl);
});

app.get('/reddit_timeline', function(req, res){
    reddit.getBest().map(post => post.title).then(console.log);
    //https://not-an-aardvark.github.io/snoowrap/Listing.html
    //use this to fetch more posts
    // reddit.getHot({limit: 25}).then(myListing => {
    //     console.log(myListing.length); // => 25
    //     myListing.fetchMore({amount: 10}).then(extendedListing => {
    //       console.log(extendedListing.length); // => 35
    //     })
    //   });
});

app.get('/reddit_post_text', function(req, res){
    reddit.getSubreddit('test').submitSelfpost({
        title: 'wzzzzw_test', 
        text: 'blah'
    });
});

app.get('/reddit_post_link', function(req, res){
    reddit.getSubreddit('test').submitLink({
        title: 'title',
        url: 'google.com'
      });
});


//Twitter routes
app.get('/sessions/connect', function(req, res){
    consumer.getOAuthRequestToken(function(error, oauthToken, oauthTokenSecret, results){
      if (error) {
        res.send("Error getting OAuth request token : " + inspect(error), 500);
      } else {  
        req.session.oauthRequestToken = oauthToken;
        req.session.oauthRequestTokenSecret = oauthTokenSecret;
        console.log("Double check on 2nd step");
        console.log("------------------------");
        console.log("<<"+req.session.oauthRequestToken);
        console.log("<<"+req.session.oauthRequestTokenSecret);
        res.redirect("https://twitter.com/oauth/authorize?oauth_token="+req.session.oauthRequestToken);      
      }
    });
  });
  
  app.get('/sessions/callback', function(req, res){
    console.log("------------------------");
    console.log(">>"+req.session.oauthRequestToken);
    console.log(">>"+req.session.oauthRequestTokenSecret);
    console.log(">>"+req.query.oauth_verifier);
    consumer.getOAuthAccessToken(req.session.oauthRequestToken, req.session.oauthRequestTokenSecret, req.query.oauth_verifier, function(error, oauthAccessToken, oauthAccessTokenSecret, result) {
      if (error) {
        res.send("Error getting OAuth access token : " + inspect(result) + "[" + oauthAccessToken + "]" + "[" + oauthAccessTokenSecret + "]" + "[" + inspect(result) + "]", 500);
      } else {
        req.session.oauthAccessToken = oauthAccessToken;
        req.session.oauthAccessTokenSecret = oauthAccessTokenSecret;
        twitter = new twit({
          consumer_key:         _twitterConsumerKey,
          consumer_secret:      _twitterConsumerSecret,
          access_token:         oauthAccessToken,
          access_token_secret:  oauthAccessTokenSecret,
          // timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
          // strictSSL:            true,     // optional - requires SSL certificates to be valid.
        });
        res.redirect('/home');
      }
    });
  });
  
  app.get('/home', function(req, res){
    consumer.get("https://api.twitter.com/1.1/account/verify_credentials.json", req.session.oauthAccessToken, req.session.oauthAccessTokenSecret, function (error, data, response) {
      if (error) {
        //console.log(error)
        res.redirect('/sessions/connect');
      } else {
        var parsedData = JSON.parse(data);
        res.send('You are signed in: ' + inspect(parsedData.screen_name));
      } 
    });
  });
  
  app.get("/twitter_timeline", function(req, res){
    twitter.get('statuses/home_timeline', twitter_options ,(err, data) =>{
        if(err){
            console.log(err);
        }else{
          res.send(data);
        }
    });
  });
  
  app.get('/twitter_post_text', function(req, res){
    twitter.post('statuses/update', { status: 'test' }, twitter_options ,(err, data) =>{
      if(err){
          console.log(err);
      }else{
        res.send(data);
        //TODO: redirect
        res.send('Successfully tweeted: ' + data);
      }
    });
  });
  
  app.get('/twitter_post_media', function(req, res){
    var b64content = fs.readFileSync('/path/to/img', { encoding: 'base64' })
   
    // first we must post the media to Twitter
    T.post('media/upload', { media_data: b64content }, function (err, data, response) {
      // now we can assign alt text to the media, for use by screen readers and
      // other text-based presentations and interpreters
      var mediaIdStr = data.media_id_string
      var altText = "Small flowers in a planter on a sunny balcony, blossoming."
      var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
    
      T.post('media/metadata/create', meta_params, function (err, data, response) {
        if (!err) {
          // now we can reference the media and post a tweet (media will attach to the tweet)
          var params = { status: 'loving life #nofilter', media_ids: [mediaIdStr] }
    
          T.post('statuses/update', params, function (err, data, response) {
            console.log(data)
          })
        }
      })
    })
  });

app.listen(8080, process.env.IP, function(){
    console.log('Server started');
});
