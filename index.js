const express = require('express');
require('dotenv').config();
const ModelS = require('./lib/utils/tesla/model_s');
const app = express();
app.use(express.json());

// ---------------------------------------------

app.get('/', (req, res) => {
  ModelS
    .find()
    .then(modelS => res.send(modelS));
  console.log('im here');
});

// -------------------------------------------

app.post('/', async(req, res) => {
  const modelS = await ModelS.insert(req.body);
  res.send(modelS);
});

// ---------------------------------------------

module.exports = { app };
