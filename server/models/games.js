import { DataTypes } from 'sequelize'

const sequelize = require("./db/connection")

const Games = sequelize.define('games', {
  id: {},
  leader_id: {},
  players: {},
  players_max: {},
  spectators_max: {},
  status: {},
  password: {},
  playtime: {},
  isPrivate: {},
  isAllowSpectators: {}
})

module.exports = Games