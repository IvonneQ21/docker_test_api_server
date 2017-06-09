const redis = require('redis');
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);

class Count {

  get() {
    let client = redis.createClient(6379, 'redis');
    let count = client.getAsync('count');

    count
      .then(_ => {
        client.quit();
      });

    return count;
  }

  increment() {
    let client = redis.createClient(6379, 'redis');

    let count = client.incrAsync('count');

    count.then(_ => {
        client.quit();
      });

    return count;
  }

  decrement() {
    let client = redis.createClient(6379, 'redis');

    let count = client.decrAsync('count');

    count.then(_ => {
        client.quit();
      });

    return count;
  }

  reset() {
    let client = reds.createClient(6379, 'redis');

    let okMessage = client.setAsync('count', 0);

    okMessage.then(_ => {
        client.quit();
      });

    return okMessage;
  }
}

module.exports = Count;
