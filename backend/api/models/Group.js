/**
* Group.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id: "INTEGER"
  },
  // users: {
  //   collection: "user",
  //   via: "groups"
  // },
  activities: {
    collection: "activity",
    via: "groups"
  }
};
