const snoowrap = require('snoowrap');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
var config = require('./reddit_config.js');

app.use(bodyParser.json());

//create reddit
// Alternatively, just pass in a username and password for script-type apps.
const reddit = new snoowrap({
    userAgent: 'Capstone',
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    refreshToken: config.refreshToken,
  });

  app.get("/", function(req, res){
    var authenticationUrl = snoowrap.getAuthUrl({
        clientId: config.clientId,
        scope: ['edit', 'mysubreddits', 'read', 'submit', 'vote'],
        redirectUri: 'http://localhost:8081/',
        permanent: false,
        state: 'randomstring' // a random string, this could be validated when the user is redirected back
      });
      console.log(authenticationUrl);
      res.redirect(authenticationUrl);
    // reddit.getBest().map(post => post.title).then(console.log);
    //https://not-an-aardvark.github.io/snoowrap/Listing.html
    //use this to fetch more posts
    // reddit.getHot({limit: 25}).then(myListing => {
    //     console.log(myListing.length); // => 25
    //     myListing.fetchMore({amount: 10}).then(extendedListing => {
    //       console.log(extendedListing.length); // => 35
    //     })
    //   });
  });

app.listen(8081, process.env.IP, function(){
    console.log('Server started');
  });

