/**
 * Passport configuration
 *
 * This is the configuration for your Passport.js setup and where you
 * define the authentication strategies you want your application to employ.
 *
 * I have tested the service with all of the providers listed below - if you
 * come across a provider that for some reason doesn't work, feel free to open
 * an issue on GitHub.
 *
 * Also, authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

module.exports.passport = {
  local: {
    strategy: require('passport-local').Strategy
  },

  bearer: {
    strategy: require('passport-http-bearer').Strategy
  },

  google: {
    name: 'Google',
    protocol: 'oauth2',
    strategy: require('passport-google-oauth').OAuth2Strategy,
    scope: ['https://www.googleapis.com/auth/userinfo.profile', "https://www.googleapis.com/auth/userinfo.email"],
    options: {
      callbackURL: 'http://server.oskarlundh.eu:1337/auth/google/callback',
      clientID: '451431386283-u4siheu3s85enjkfe8tbc6n88814825t.apps.googleusercontent.com',
      clientSecret: '718XGg7Al0moT1upqNx0KT0a'
    }
  }
};
