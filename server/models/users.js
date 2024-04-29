import { DataTypes } from 'sequelize'

const sequelize = require("./db/connection")

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [3]
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false, 
    validate: {
      len: [8]
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  }
})

module.exports = User