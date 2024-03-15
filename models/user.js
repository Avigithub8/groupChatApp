const Sequelize = require('sequelize');
const sequelize = require('../utils/db.js');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phonenumber: {
      type: Sequelize.BIGINT,
      allowNull: false
  },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
   
});

module.exports = User;