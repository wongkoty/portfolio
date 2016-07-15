var express = require('express'),
      app = express(),
      logger = require('morgan'),
      request = require('request'),
      favicon = require('serve-favicon'),
      port = process.env.PORT || 2050;

app.use(logger('dev'));
app.use(express.static("public"));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.use('/resume', function(req, res) {
  res.sendFile(__dirname + '/public/resume.pdf')
});

app.use('/instagram', function(req, res) {
  console.log('instagrammy')
  request("https://api.instagram.com/v1/users/self/media/recent/?access_token=" + process.env.IG_ACCESS_TOKEN + "&count=4", function(error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(body);
      res.send(JSON.parse(body))
    }
  })
})

app.listen(port, function() {
  console.log('we are on port ' + port)
})

// https://api.instagram.com/v1/users/self/media/recent/?access_token=41281790.1677ed0.033e8892d62e4394b44bc1a9246fb33f&count=4