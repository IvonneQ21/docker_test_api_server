const Count = require('../controllers/Count');
const count = new Count();
const containerID = require('../utils/containerID');

module.exports = {
  getCountHandler,
  incrementHandler,
  decrementHandler,
  resetHandler
}

function getCountHandler(req, res) {
  count.get()
    .then(count => res.json({count, containerID}))
    .catch(err => {
      res.status(500).json({ err })
    });
}

function incrementHandler(req, res) {
  count.increment()
    .then(count => res.json({count, containerID}))
    .catch(err => {
      res.status(500).json({ err })
    });
}

function decrementHandler(req, res) {
  count.decrement()
    .then(count => res.json({count, containerID}))
    .catch(err => {
      res.status(500).json({ err })
    });
}

function resetHandler(req, res) {
  count.reset()
    .then(okMessage => {
      let count = 0;
      res.json({count, containerID})
    })
    .catch(err => {
      res.status(500).json({ err })
    });
}
