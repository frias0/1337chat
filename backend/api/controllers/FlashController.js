/**
 * FlashController
 *
 * @description :: Server-side logic for managing flashes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * `FlashController.home()`
   */
  home: function (req, res) {
    Passport
      .findOne({ protocol: 'local', user: req.user.id })
      .exec(function(err, passport) {
        return res.render('chat');
      });
  },

  /**
   * `FlashController.remotehome()`
   */
  remotehome: function (req, res) {
    res.json({status:"No Authorization"})
    //return res.render('auth/login')
  }

};
