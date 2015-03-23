var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  local_attributes: {
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' }
  },
  // google_attributes: {
  //   id: {type:"string", unique: true},
  //   token: {type:"string", unique: true},
  //   email: {type:"string", unique: true},
  //   name: {type:"string"}
  // },
  groups:{
    collection: "group",
    via: "users",
    dominant: true
  },
  activities :{
    collection: "activity",
    via: "users"
  }
};

module.exports = User;
