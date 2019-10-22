var twit = require('twit')
var config = require('./config.js')
var twitter = new twit(config)

// twitter.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//     console.log(data)
// });

var options = { screen_name: 'MSD_Project',
                count: 5 };
console.log("here")
twitter.get('statuses/home_timeline', options , function(err, data) {
  for (var i = 0; i < data.length ; i++) {
    console.log(data[i].text);
  }
});