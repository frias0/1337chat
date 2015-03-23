/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	show: function (req, res) {
		console.log("show called")
		var name = "My Name";

		var c0 = {name:"Conversation X", nMessages:10, id:1};
		var c1 = {name:"Conversation Y", nMessages:15, id:2};
		var c2 = {name:"Conversation Z", nMessages:37, id:3};

		//res.render('profile', {myuser:{name:name}});
		res.render('profile', {myName:name, conversations:[c0, c1, c2]});
  }
};
