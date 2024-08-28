const express = require('express');
const formatter = require('./util/text');
const calculator = require('./util/number');

const app = express();

app.use(express.json());


app.get('/util/number/:action', (req, res) => {
  const { action } = req.params;
  const input = req.query.input.split(',').map(Number); 

  if (action !== 'minimum' && action !== 'maximum') {
    return res.status(400).send({ error: 'Ação inválida para números' });
  }

  const result = {
    action,
    input,
    output: calculator(input, action),
  };

  res.status(200).send(result);
});


app.post('/util/text/:action', (req, res) => {
  const { action } = req.params;
  const { input } = req.body;

  if (action !== 'lowercase' && action !== 'uppercase') {
    return res.status(400).send({ error: 'Ação inválida para texto' });
  }

  const result = {
    action,
    input,
    output: formatter(input, action),
  };

  res.status(200).send(result);
});

app.listen(3000, () => {
  console.log('App listening at http://localhost:3000');
});
