import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  response.json([
    'Lucas',
    'Mauro',
  ]);
});

app.listen(3333);