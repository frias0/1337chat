/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	show: function (req, res) {
		//var name = req.user.username;
		var user_id = req.user.id;
		// var c0 = {name:"Conversation X", nMessages:10, id:1};
		// var c1 = {name:"Conversation Y", nMessages:15, id:2};
		// var c2 = {name:"Conversation Z", nMessages:37, id:3};
		//get conversations from User or Group model, identified by id
		User.findOne({where: {id: user_id}}).populate('groups').exec(function(e,row){
			console.log(row);
			var user = row;

			res.render('profile', {myName:user.username, conversations:user.groups});
		});
  }
};
