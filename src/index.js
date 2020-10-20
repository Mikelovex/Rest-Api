const express = require('express')
const app = express()
const connection = require('../database/db')



connection
    .authenticate()
    .then(() => console.log('Conectado ao banco de dados...'))
    .catch(err => console.log(err))



app.get('/', (req, res) => {
    res.send('ok')
})





app.listen(8080, () => console.log('Server is running...'))