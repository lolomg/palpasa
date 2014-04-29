var express = require('express');
var router = express.Router();

var User = require("../controller/user");
var User = new User();

router.all("*").get("/:name", function(req, res){
	User.email(req.params.name, function(err, data){
		res.send(data);
	});
}).post("/:fname/:lname/:email/:password", function(req, res){
	res.send("User post");
}).put("/:fname/:lname/:email/:password", function(req, res){
	res.send("User post");
});
module.exports = router;
