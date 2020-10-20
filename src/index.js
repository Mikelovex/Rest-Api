const express = require('express')
const app = express()
const connection = require('../database/db')
const bodyparser = require('body-parser')
const Post = require('../models/Posts')
const PostController = require('../controllers/PostController')

//Configuração bodyParser
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())


//Conexão banco de dados
connection
    .authenticate()
    .then(() => console.log('Conectado ao banco de dados...'))
    .catch(err => console.log(err))



app.use('/', PostController)





app.listen(8080, () => console.log('Server is running...'))