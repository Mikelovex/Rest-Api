const express = require('express')
const router = express.Router()
const User = require('../models/Users')
const auth = require('../midlewares/midleware')
const bcrypt = require('bcryptjs')

router.get('/users',auth, (req, res) => {
    User.findAll().then((user) => {
        res.status(200).json({user: user})
    })
})


router.get('/user/:id', (req, res) => {
    const id = req.params.id

    User.findByPk(id).then((user) => {
        res.status(200).json({user: user})
    })
})


router.post('/user/create', (req, res) => {
    const {name, email, password} = req.body

    //criando hash da senha

    //gerando um salt de 10 caracteres
    const salt = bcrypt.genSaltSync(10)
    // criando o hash da senha passada pelo usuario junto com o salt gerado
    const hash = bcrypt.hashSync(password, salt)

    User.create({
        name: name,
        email: email,
        password: hash
    }).then(() => {
        res.status(200).json({
            name: name,
            email: email,
            password: hash
        })
    })
})


module.exports = router