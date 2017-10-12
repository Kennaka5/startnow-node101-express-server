// import files and packages up here
var express = require('express');//uses express
var morgan = require('morgan')//logs every time the user goes to server
var path = require('path');// allows the use of the file directory path
//<Use the path copied from the json file from node 101 express
var json = require('/Users/KennethNakayama/oca/startnow-node101-express-server/server/data.json'); 

// create your express server below

var app = express();
app.use(morgan('dev'));

// add your routes and middleware below
//<use express, stattic function to access file from directory
app.use(express.static(__dirname + '/../../startnow-web101-san-diego-top-spots'));

app.get('/data', function(request, response){
    response.send(json)
});

// finally export the express application
module.exports = app;













//work with later
// // import files and packages up here
// // use the express and morgan funtions to use that frameork
// var express = require('express');
// var morgan = require('morgan');
// var path = require('path');
// var jsonData = require('/Users/kennethnakayama/oca/startnow-node101-express-server/server/data.json');
// // variable for Sandiego Topspots callback
// var json = require('../startnow-web101-san-diego-top-spots');
// // create your express server 
// var fs = require('fs');
// var data = fs.readFileSync('data.json')
// var results = JSON.parse(data);
// var app = express();
// // get data from /data and send json response?
// app.get('/data', function (request, response) {
//   response.send(results)
// });
// app.use(express.static(__dirname + '/../../startnow-web101-san-diego-top-spots'));
// // add your routes and middleware below
// app.use(morgan('dev'));
// // finally export the express application
// module.exports = app;
//app.use(express.static(__dirname + ‘../startnow-web101-san-diego-top-spots’));
