var twit = require('twit')
var config = require('./twitter_config.js/index.js')
var twitter = new twit(config)

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
// const cors = require('cors');
// twitter.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//     console.log(data)
// });

// app.use(cors());
app.use(bodyParser.json());

var options = { screen_name: 'MSD_Project',
                count: 20};
// twitter.get('statuses/home_timeline', options , function(err, data) {
//   for (var i = 0; i < data.length ; i++) {
//     console.log(data[i]);
//   }
// });

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  next();
})

app.get("/", function(req, res){
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