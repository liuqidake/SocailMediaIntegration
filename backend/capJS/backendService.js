const snoowrap = require('snoowrap');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
var redditConfig = require('./reddit_config.js');
var twit = require('twit')
var twitterConfig = require('./twitter_config.js')
var twitter = new twit(twitterConfig)
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(function(req, res, next){
  // res.setHeader('Access-Control-Allow-Origin', '*');
  //res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  next();
})

//create reddit
// Alternatively, just pass in a username and password for script-type apps.
const reddit = new snoowrap({
  userAgent: 'Capstone',
  clientId: redditConfig.clientId,
  clientSecret: redditConfig.clientSecret,
  refreshToken: redditConfig.refreshToken,
});

var options = { screen_name: 'MSD_Project',
                count: 20};

app.get("/reddit/auth", function(req, res){
  var authenticationUrl = snoowrap.getAuthUrl({
      clientId: redditConfig.clientId,
      scope: ['edit', 'mysubreddits', 'read', 'submit', 'vote'],
      redirectUri: 'http://localhost:8081/',
      permanent: false,
      state: 'randomstring' // a random string, this could be validated when the user is redirected back
    });
    console.log(authenticationUrl);
    // res.redirect(authenticationUrl);
    res.send(authenticationUrl);
});

app.get("/twitter/auth", function(req, res){
  twitter.get('statuses/home_timeline', options ,(err, data) =>{
      if(err){
          console.log(err);
      }else{
        res.send(data);
      }
  });
});

app.listen(8081, process.env.IP, function(){
    console.log('Server started');
});
