const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Array para armazenar os feedbacks em memória
let feedbacks = [];

// Página Inicial: Formulário de envio de feedback
app.get('/', (req, res) => {
  res.send(`
    <h1>Enviar Feedback</h1>
    <form action="/feedbacks/enviar" method="POST">
      <label>Nome:</label><br>
      <input type="text" name="nome" required><br>
      <label>Comentário:</label><br>
      <textarea name="comentario" required></textarea><br>
      <button type="submit">Enviar</button>
    </form>
    <br>
    <a href="/feedbacks/lista">Ver Feedbacks</a>
  `);
});

// Rota de envio de feedback
app.post('/feedbacks/enviar', (req, res) => {
  const { nome, comentario } = req.body;

  // Armazena o feedback no array
  feedbacks.push({ nome, comentario, id: Date.now() });

  // Redireciona para a lista de feedbacks
  res.redirect('/feedbacks/lista');
});

// Rota de listagem de feedbacks
app.get('/feedbacks/lista', (req, res) => {
  let lista = feedbacks.map(fb => `
    <li>
      <strong>${fb.nome}</strong>: ${fb.comentario}
      <form action="/feedbacks/remover" method="POST" style="display:inline;">
        <input type="hidden" name="id" value="${fb.id}">
        <button type="submit">Remover</button>
      </form>
    </li>
  `).join('');

  res.send(`
    <h1>Lista de Feedbacks</h1>
    <ul>
      ${lista}
    </ul>
    <br>
    <a href="/">Voltar para o formulário</a>
  `);
});

// Rota de remoção de feedback
app.post('/feedbacks/remover', (req, res) => {
  const { id } = req.body;

  // Filtra e remove o feedback com o ID correspondente
  feedbacks = feedbacks.filter(fb => fb.id != id);

  // Redireciona novamente para a lista
  res.redirect('/feedbacks/lista');
});

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
