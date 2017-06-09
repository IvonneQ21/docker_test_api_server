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

// function getCountHandler(req, res) {
//   count.get()
//     .then(count => res.json({count, containerID}))
//     .catch(err => {
//       res.status(500).json({ err })
//     });
// }

// function incrementHandler(req, res) {
//   count.increment()
//     .then(count => res.json({count, containerID}))
//     .catch(err => {
//       res.status(500).json({ err })
//     });
// }

// function decrementHandler(req, res) {
//   count.decrement()
//     .then(count => res.json({count, containerID}))
//     .catch(err => {
//       res.status(500).json({ err })
//     });
// }

// function resetHandler(req, res) {
//   count.reset()
//     .then(okMessage => {
//       let count = 0;
//       res.json({count, containerID})
//     })
//     .catch(err => {
//       res.status(500).json({ err })
//     });
// }
