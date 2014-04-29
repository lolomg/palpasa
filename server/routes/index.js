var express = require('express');
var router = express.Router();

var user = require('./users');

/* GET home page. */

module.exports = function(app){
	app.use('/user', user);
	app.get('/', function(req, res) {
	  res.send("text");
	});

};
