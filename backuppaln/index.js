const express = require("express");
const methodOverride = require('express-method-override');
const firebase = require("firebase/app")
const middleware = require('./middleware/index');
const fs = require("fs");
const multer = require('multer');
const upload = multer({ dest: __dirname + '/uploads/images' });
var snoowrap = require('snoowrap');
var bodyParser = require('body-parser');
var logger = require('express-logger');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var inspect = require('util-inspect');
var oauth = require('oauth');
var reddit_config = require('./config/reddit_config.js');
var twitter_config = require('./config/twitter_config.js');
var twit = require('twit');
var twitter = new twit(twitter_config);
const axios = require("axios");
const app = express();

var firebaseConfig = {
  apiKey: "AIzaSyBbI02LGsO_PUBJYd2BrmY1d15FUxSUoVw",
  authDomain: "capstone-cf0d7.firebaseapp.com",
  databaseURL: "https://capstone-cf0d7.firebaseio.com",
  projectId: "capstone-cf0d7",
  storageBucket: "capstone-cf0d7.appspot.com",
  messagingSenderId: "229596909500",
  appId: "1:229596909500:web:8810970d67ca0b42dae5b9",
  measurementId: "G-SYDWTG9RE5"
};

//check if the application is already in use
var application = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig)


app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger({ path: "log/express.log" }));
app.use(session({ secret: "secret word", resave: false, saveUninitialized: true }));

//Reddit Setup

//create reddit
// Alternatively, just pass in a username and password for script-type apps.
var reddit;

//Twitter setup

var twitter_options = { screen_name: 'MSD_Project', count: 30 };

var _twitterConsumerKey = twitter_config.consumer_key;
var _twitterConsumerSecret = twitter_config.consumer_secret;

var consumer = new oauth.OAuth(
  "https://twitter.com/oauth/request_token", "https://twitter.com/oauth/access_token",
  _twitterConsumerKey, _twitterConsumerSecret, "1.0A", "http://localhost:8080/sessions/callback", "HMAC-SHA1");

//Reddit routes
app.get('/reddit_callback', function (req, res) {
   var auth_code = req.query.code;
   reddit = snoowrap.fromAuthCode({
        code: auth_code,
        userAgent: 'Capstone',
        clientId: reddit_config.clientId,
        clientSecret: reddit_config.clientSecret,
        redirectUri: 'http://localhost:8080/reddit_callback'
      });
  res.redirect('/reddit_auth');
});

app.get('/reddit_login', middleware.isLoggedIn, function (req, res) {
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

app.get('/reddit_timeline', middleware.isLoggedIn, function (req, res) {
  reddit.then(r => {
    // Now we have a requester that can access reddit through the user's account
    r.getBest().map(post => post)
    .then((response) => {
      res.send(response)
    }, (err) => {
      console.log(err);
    });
  });
    
});

// app.get('/reddit_post_text', function (req, res) {
//   reddit.getSubreddit('test').submitSelfpost({
//     title: 'wzzzzw_test',
//     text: 'blah'
//   });
// });

// app.get('/reddit_post_link', function (req, res) {
//   reddit.getSubreddit('test').submitLink({
//     title: 'title',
//     url: 'google.com'
//   });
// });

//twitter routes

app.get("/twitter_timeline", middleware.isLoggedIn, function (req, res) {
  twitter.get('statuses/home_timeline', twitter_options, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});



app.get("/", middleware.isLoggedIn, (req, res) => {
  res.render("home");
})

app.get("/home", middleware.isLoggedIn, async (req, res) => {
  var redditContent = [];
  var twitterContent = [];
  // if (redditAuth) {

  try{
    var redditRes = await axios.get("http://localhost:8080/reddit_timeline");
    if (redditRes) {
      redditContent = redditRes.data;
    }
  }catch(e){
    
  }
  // }

  // if (twitterAuth) {
    var twitterRes = await axios.get("http://localhost:8080/twitter_timeline");
    if (twitterRes) {
      twitterContent = twitterRes.data;
      twitterContent.forEach((t) => {
        var text = String(t.text);
        if (t.extended_entities) {
          var index = text.lastIndexOf(" ");
          t.texts = text.substring(0, index);
          t.image = String((t.extended_entities.media)[0].media_url_https);
        } else {
          t.texts = text;
          t.image = "";
        }
      })
    }
  // }

  res.render("home", { reddit: redditContent, twitter: twitterContent })

})

app.post("/tweet", middleware.isLoggedIn,upload.single('photo'), (req, res) => {
  var text = req.body.text;
  var file = req.file;
  console.log(file);
  if ((!text || text === "") && !file) {
    res.send("bad input");
  } else if (!file) {
    twitter.post('statuses/update', { status: text }, twitter_options, (err, data) => {
      if (err) {
        res.send("err")
      } else {
        console.log("no file success");
      }
    })
  } else {
    var b64content = fs.readFileSync(file.path, { encoding: 'base64' })
    twitter.post('media/upload', { media_data: b64content }, function (err, data, response) {
      var mediaIdStr = data.media_id_string
      var altText = "Small flowers in a planter on a sunny balcony, blossoming."
      var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
      twitter.post('media/metadata/create', meta_params, function (err, data, response) {
        if (!err) {
          // now we can reference the media and post a tweet (media will attach to the tweet)
          var textContent = "";
          if( text && text.length !=0){
            textContent = text;
          }
          var params = { status: textContent, media_ids: [mediaIdStr] }

          twitter.post('statuses/update', params, function (err, data, response) {
            // console.log(data)
          })
        }
      })
      if (err) {
        res.send("bad input");
      } else {
        console.log("success");
      }
    })
  } 
  res.redirect("/home");
}

)

app.post("/reddit_post", middleware.isLoggedIn,(req, res)=>{
  var title = req.body.title;
  var text = req.body.text;
  var url = req.body.url;
  var subreddit = req.body.subreddit;
  if(url){
    reddit.then(r => {
      // Now we have a requester that can access reddit through the user's account
      r.getSubreddit(subreddit).submitLink({
        title:title,
        url: url
      });
    });  
  }else{
    reddit.then(r => {
      // Now we have a requester that can access reddit through the user's account
      r.getSubreddit(subreddit).submitSelfpost({
          title: title, 
          text: text
      });
    });
  }

  res.redirect("/home")
})


app.get("/login", (req, res) => {
  res.render("login")
})
app.post("/login", (req, res) => {
  var email = String(req.body.email);
  var password = req.body.password;
  firebase.auth().signInWithEmailAndPassword(email, password).then(
    (user) => {
      res.redirect('/reddit_auth');
    },
    (err) => {
      console.log(err)
    }
  )
})

app.get("/register", (req, res) => {
  res.render("register")
})
app.post("/register", (req, res) => {
  var email = String(req.body.email);
  var password = req.body.password;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      (user) => {
        res.redirect('/login');
      },
      (err) => {
        console.log(err)
      }
    )
})
app.get("/logout", middleware.isLoggedIn, (req, res) => {
  firebase.auth().signOut().then(
    () => {
      res.redirect('/login')
    }
  )

})

app.get("/reddit_auth", middleware.isLoggedIn,(req, res)=>{
  res.render("authReddit");
})

app.get("/twitter_auth", middleware.isLoggedIn, (req, res)=>{
  res.render("authTwitter");
})

app.get('/twitter_login', function(req, res){
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
      res.redirect('/twitter_auth');
    }
  });
});




app.listen(8080, process.env.IP, function () {
  console.log('Server started');
});