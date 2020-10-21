const express = require('express')
const router = express.Router()
const User = require('../models/Users')
const jwt = require('jsonwebtoken')

// criando segredo para usar no token
const jwtSecret = 'dsaduahxjkbnzbcmguiebhxgywgiorqacxzm,bfbnmvhsgdsa'

router.post('/auth',(req, res) => {
    const {email, password} = req.body

    if(email != undefined) {

            User.findOne({ where: {email: email}}).then(user => {
            if(user != undefined) {

                if(user.password == password) {

                    jwt.sign({id: user.id, email: user.email},jwtSecret,{expiresIn: '48h'}, (err, token) => {
                        if(err) {
                            res.status(400).json({err: 'falha interna'})
                        }else {
                            res.status(200).json({token: token})
                        }
                    })
                }else {
                    res.status(401).json({err: 'senha invalida'})
                }
            }else {
                res.status(404).json({err: 'Email nao existe'})
            }
        })

        

    }else{
        res.status(400).json({error: 'Email invalido'})
    }
})



module.exports = router