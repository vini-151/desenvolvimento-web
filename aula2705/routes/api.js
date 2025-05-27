const express = require('express')
const router = express.Router();

const db = require('../db')

//listar todos os users: READ

router.get('/', (req, res) =>{
    db.query('SELECT * FROM users', (err, results)=>{
        res.json(results)
    })
})

module.exports = router