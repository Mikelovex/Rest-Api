const Sequelize = require('sequelize')
const connection =  require('../database/db')


const Post = connection.define('post', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    post: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    }
})



module.exports = Post
