const express = require('express');
require('dotenv').config();
const ModelS = require('./lib/utils/tesla/model_s');
const app = express();
app.use(express.json());


// -------------------------------------------

app.post('/model_s', async(req, res) => {
  const modelS = await ModelS.insert(req.body);
  res.send(modelS);
});

// ---------------------------------------------

app.get('/model_s', (req, res) => {
  ModelS
    .find()
    .then(modelS => res.send(modelS));
});

// ---------------------------------------------

module.exports={ app }