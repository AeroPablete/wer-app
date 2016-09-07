// -- PACKAGES --
var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose')
    path = require('path');

var config = require('./config');

// -- APP & DB --
// Set App, Port and DataBase
var app = express();
var port = process.env.PORT || 8080;
mongoose.connect(config.database);

// -- APP CONFIGURATION --
// Use Body Parser so we can grab information from POST request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure the app to handle CORS requests
app.use(function(req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');

  next();
});

// Log All Requests to the console
app.use(morgan('dev'));

// -- API ROUTES --
// Set Initial Data Route
app.get('/data', function(req, res) {

  console.log('Initial Data');
});

// -- CLIENT --
app.use(express.static(__dirname + '/client'));
app.get('*', function(req, res) {

  res.sendFile(path.join(__dirname, '/client/app/index.html'));
})

// -- START THE SERVER --
app.listen(port);
console.log('Wer App is running on port ' + port);
