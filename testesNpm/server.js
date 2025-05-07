const http = require('http');


const server = http.createServer((req, res) => { //cria servidor
    res.writeHead(200, { 'Content-Type': 'text/plain' }); //cria texto plano (aquele 200 ali é o status)
    
    res.end('Hello, Worlasdasd!-  Node'); //renderiza um hello world na página
});

const port = 3000; //porta que o seerver vai rodar 

server.listen(port, () => { //escutando na porta 3000
    console.log(`Servidor rodando na porta ${port}`);
});