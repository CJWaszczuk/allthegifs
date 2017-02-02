var express = require('express');
var request = require('request');

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var options = {
  url: "https://www.youtube.com/watch?v=GRWMkUUlNuc"
}

app.get('/', function (req, res) {
  res.render('home', {
    title: 'Welcome'
  });
})

app.listen(3000);