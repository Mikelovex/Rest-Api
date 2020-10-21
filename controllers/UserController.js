const express = require('express')
const router = express.Router()
const User = require('../models/Users')
const auth = require('../midlewares/midleware')


router.get('/users',auth, (req, res) => {
    User.findAll().then((user) => {
        console.log(user)
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

    User.create({
        name: name,
        email: email,
        password: password
    }).then(() => {
        res.status(200).json({
            name: name,
            email: email,
            password: password
        })
    })
})


module.exports = router