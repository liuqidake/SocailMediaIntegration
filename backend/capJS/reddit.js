const snoowrap = require('snoowrap');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
var reddit_config = require('./reddit_config.js');

app.use(bodyParser.json());

//create reddit
// Alternatively, just pass in a username and password for script-type apps.
var reddit;

app.get('/', function(req, res){

});

app.get('/reddit_callback', function(req, res){
    var auth_code = req.query.code;

    reddit = snoowrap.fromAuthCode({
        code: auth_code,
        userAgent: 'Capstone',
        clientId: reddit_config.clientId,
        clientSecret: reddit_config.clientSecret,
        redirectUri: 'http://localhost:8080/reddit_callback'
      });
    
      res.redirect('/');
});

app.get('/reddit_login', function(req, res){
    var authenticationUrl = snoowrap.getAuthUrl({
        clientId: reddit_config.clientId,
        scope: ['edit', 'mysubreddits', 'read', 'submit', 'vote'],
        redirectUri: 'http://localhost:8080/reddit_callback',
        permanent: true,
        state: 'randomstring' // a random string, this could be validated when the user is redirected back
    });
    // var code = new URL(window.location.href).searchParams.get('code');
    // console.log(querystring.decode(authenticationUrl));
    res.redirect(authenticationUrl);
});

app.get('/timeline', function(req, res){
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

app.get('/post_text', function(req, res){
    reddit.then(r => {
        // Now we have a requester that can access reddit through the user's account
        r.getSubreddit('test').submitSelfpost({
            title: 'wzzzzw_test', 
            text: 'from the promise'
        });
      });
});

app.get('/post_link', function(req, res){
    reddit.getSubreddit('sub').submitLink({
        title: 'title',
        url: 'link'
      });
});

app.listen(8080, process.env.IP, function(){
    console.log('Server started');
});

