const Sequelize = require('sequelize');
const db = require('../db');


const Entry  = db.define('entry', {
  title:{
    type:Sequelize.STRING,
    allowNull: false,
    validate: { 
      notEmpty: true,
    }
  },
  body: {
    type: Sequelize.TEXT,
    allowNull:false, 
    validate: { 
      notEmpty: true
    }
  }
});


module.exports = Entry;