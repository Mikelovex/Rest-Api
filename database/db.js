const Sequelize = require('sequelize')

const connection = new Sequelize('api', 'root', '102030digdin', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'

})

module.exports = connection