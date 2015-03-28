/**
 * GroupController
 *
 * @description :: Server-side logic for managing groups
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	join: function (req, res) {
		var group_id = req.group;
		var user_id = req.user;

		Group.findOne({where: {id: group_id}}).populate('members').exec(function(e,group_row){
			User.findOne({where: {id: user_id}}).populate('groups').exec(function(e,user_row){
				group_row.members.add(user_row.id);
				user_row.groups.add(group_row.id);
				user_row.save();
				group_row.save();
				return res.JSON({status: 1,});
			});
		});
	},
	create: function (req, res) {
		var user_id = req.user.id;
		Group.create({name:'hej', members:[user_id]}).exec(function(err,created){
	  	console.log('Created group with name '+created.name);
			User.findOne({where: {id: user_id}}).populate('groups').exec(function(e,user_row){
				user_row.groups.add(created.id);
				user_row.save();
				return res.json({status: 1,});
			});
	  });
	}
};
