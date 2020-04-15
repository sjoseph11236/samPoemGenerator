const db = require('./db');
const User = require('./models/User');
const Entry = require('./models/entry');

// Associates
User.hasMany(Entry);
Entry.belongsTo(User);

// associations go here

module.exports = { 
  db,
  User,
  Entry
};