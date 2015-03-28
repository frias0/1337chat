/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	profile: function (req, res) {
		//var name = req.user.username;
		var user_id = req.user.id;
		//get conversations from User or Group model, identified by id
		User.findOne({where: {id: user_id}}).populate('groups').populate('friends').exec(function(e,row){
			console.log(row);
			var user = row;

			res.render('profile', {myName:user.username, conversations:user.groups, friends:user.friends});
		});
  },
	friends: function(req, res){
		var user_id = req.user.id;
		User.findOne({where: {id: user_id}}).populate('friends').exec(function(e,row){
			var user = row;

			res.json(user.friends);
		});
	},
	groups: function(req, res){
		var user_id = req.user.id;
		User.findOne({where: {id: user_id}}).populate('groups').exec(function(e,row){
			var user = row;

			res.json(user.groups);
		});
	},
	admin: function(req, res){
		res.view('admin/index');
	},
	new: function(req, res){
		console.log("new");
		res.view('admin/new');
	},
	// render the profile view (e.g. /views/show.ejs)
  show: function(req, res, next) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();
      res.view('admin/show', {user: user});
    });
  },

  // // render the edit view (e.g. /views/edit.ejs)
  edit: function(req, res, next) {

    // Find the user from the id passed in via params
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next('User doesn\'t exist.');

			res.view('admin/edit', {user: user});
    });
  },

  // process the info from edit view
  update: function(req, res, next) {

    //if (req.user.admin) {
		if(1){
      var userObj = {
        name: req.param('username'),
        admin: req.param('admin')
      }
    } else {
    	return res.redirect('/admin');
    }

    User.update(req.param('id'), userObj, function userUpdated(err) {
      if (err) {
        return res.redirect('/admin/edit/' + req.param('id'));
      }

      res.redirect('/admin/show/' + req.param('id'));
    });
  },

  destroy: function(req, res, next) {

    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);

      if (!user) return next('User doesn\'t exist.');

      User.destroy(req.param('id'), function userDestroyed(err) {
        if (err) return next(err);

        // Inform other sockets (e.g. connected sockets that are subscribed) that this user is now logged in
        User.publishUpdate(user.id, {
          name: user.name,
          action: ' has been destroyed.'
        });

        // Let other sockets know that the user instance was destroyed.
        User.publishDestroy(user.id);

      });

      res.redirect('/admin');

    });
  },
};
