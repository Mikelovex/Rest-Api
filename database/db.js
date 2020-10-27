const Sequelize = require('sequelize')
require('dotenv').config()

const connection = new Sequelize('api', 'root', process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'

})

module.exports = connection