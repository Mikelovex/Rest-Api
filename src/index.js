const express = require('express')
const app = express()
const connection = require('../database/db')
const bodyparser = require('body-parser')
const Post = require('../models/Posts')
const User = require('../models/Users')
const PostController = require('../controllers/PostController')
const UserController = require('../controllers/UserController')
const auth = require('../controllers/Auth')

//Configuração bodyParser
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())


//Conexão banco de dados
connection
    .authenticate()
    .then(() => console.log('Conectado ao banco de dados...'))
    .catch(err => console.log(err))



app.use('/', PostController)
app.use('/', UserController)
app.use('/', auth)



app.listen(8080, () => console.log('Server is running...'))