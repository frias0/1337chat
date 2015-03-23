var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,
  connection: "leet_chat_db",

  attributes: {
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' }
    // groups:{
    //   collection: "group",
    //   via: "users",
    //   dominant: true
    // },
    // activities :{
    //   collection: "activity",
    //   via: "users"
    // }
  }

};

module.exports = User;
