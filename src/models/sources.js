const {
  Model,
  DataTypes
} = require('sequelize');

const sequelize = require('../utils/database')

class Source extends Model {}

Source.init({
  url: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'source'
})

module.exports = Source
