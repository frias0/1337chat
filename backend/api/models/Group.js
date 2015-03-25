/**
* Group.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: "leet_chat_db",

  attributes: {
    name: {type: "string"},
    activities: {
      collection: "Activity",
      via: "group"
    },
    members: {
      collection: "User",
      via: "groups"
    }
  }

};
