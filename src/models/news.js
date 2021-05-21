const {
  Model,
  DataTypes
} = require('sequelize');

const sequelize = require('../utils/database')

class News extends Model {}

News.init({
  title: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'news'
})

module.exports = News
