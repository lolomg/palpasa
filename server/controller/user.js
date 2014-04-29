var Base = require("./index");
var  Base = new Base();
var UserModel = require("../model/user");
var UserModel = new UserModel();
var User = Base.extend({
	email: function(e, callback){
		return UserModel.getEmail(e, callback);
	}
});
module.exports=User; 