const express = require('express');

const {
  getCountHandler,
  incrementHandler,
  decrementHandler,
  resetHandler
} = require('./handlers');

const app = express();

const Count = require('./controllers/Count');
const count = new Count();

app.get('/', getCountHandler);
app.get('/increment', incrementHandler);
app.get('/decrement', decrementHandler);
app.get('/reset', resetHandler);

app.listen(8000, () => console.log('listening on 8000'));
