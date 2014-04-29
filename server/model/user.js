var Base = require("./index");
Base = new Base();
var User = Base.extend({
	getEmail: function(e, callback){
		return Base.getConnection(function(err, db){
			db.collection("USERS").find({fname:e}).toArray(function(err, items){
				callback(err, items);
			}); 
		});
	}
});
module.exports = User;