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

const dataRoutes = require('./config/dataRoutes');
const stockRoutes = require('./config/stockRoutes');
const userRoutes = require('./config/userRoutes');
app.use('/api', dataRoutes);
app.use('/api', stockRoutes);
app.use('/api', userRoutes);


// webpack loads index.html, looks for script src
app.get('/public/bundle.js', function(req, res){
  res.sendFile(path.join(__dirname, '../client/public/bundle.js'));
});

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '../client/index.html'));
});


//set and run the port and server
app.set('port',process.env.PORT || 8000);
var port = app.get('port');
app.listen(port);
console.log("Server listening on PORT", port);

module.exports = app;