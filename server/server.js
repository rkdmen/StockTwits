var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config');

var router = express.Router();

//initiate express
var app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(cookieParser());



// app.use('/api', );


// webpack loads index.html, looks for script src
app.get('/public/bundle.js', function(req, res){
  res.sendFile(path.join(__dirname, '../client/public/bundle.js'));
});

app.get('*', function(req, res){
  console.log('REQ.URL IS: ', req.url);
  res.sendFile(path.join(__dirname, '../client/index.html'));
});


//set and run the port and server
app.set('port',process.env.PORT || 8000);
var port = app.get('port');
app.listen(port);
console.log("Server listening on PORT", port);

module.exports = app;