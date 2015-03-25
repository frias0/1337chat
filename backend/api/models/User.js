var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,
  connection: "leet_chat_db",

  attributes: {
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' },
    admin: {
      type: 'boolean',
      defaultTo: false
    },
    friends: {
      collection: 'User',
      via: 'friends'
    }
    groups:{
      collection: "Group",
      via: "members"
    },
    activities :{
      collection: "Activity",
      via: "user"
    }
  }
};

module.exports = User;
