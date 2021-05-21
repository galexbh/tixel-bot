const {
  Sequelize
} = require('sequelize');

const sequelize = new Sequelize('test-db', '', '', {
  dialect: 'sqlite',
  host: './dev.sqlite'
});

module.exports = sequelize;
