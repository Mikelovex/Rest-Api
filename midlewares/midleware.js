const jwt = require('jsonwebtoken')

// criando segredo para usar no token
const jwtSecret = process.env.JWT_SECRET


function auth(req, res, next) {
    const authToken = req.headers['authorization']

    if(authToken != undefined){

        const bearer = authToken.split(' ')
        const token = bearer[1]

        jwt.verify(token, jwtSecret, (err, data) => {
            if(err) {
                res.status(401).json('token invalido')
            }else{
                next()
            }
        })
    }else {
        res.status(401).json({err: 'token invalido!'})
    }
}


module.exports = auth