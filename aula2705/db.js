const mysql = require('mysql2')
const db = mysql.createConnection({ // criando estrutura de conexao
  host: 'localhost',
  user: 'root',
  password: 'catolica',
  database: 'userdb3',
  port: '3307'
})

db.connect(err =>{
    if (err) throw err;
    console.log("conectado ao Db")
})

module.exports = db
