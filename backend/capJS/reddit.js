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
    reddit.getBest().map(post => post.title).then(console.log);
  });

app.listen(8081, process.env.IP, function(){
    console.log('Server started');
  });

