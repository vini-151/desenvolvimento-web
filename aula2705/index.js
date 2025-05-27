const express = require('express')
const app = express()
const port = 3000 

//criando conexao com o banco

const db = require('./db')




//rotas


app.get('/', (req, res)=>{

    res.send("front funcionando")


});

const apiRoutes = require('./routes/api')

app.use('/api/users', apiRoutes);




app.listen(port, ()=>{
    console.log("Servidor está funcionando");

})
