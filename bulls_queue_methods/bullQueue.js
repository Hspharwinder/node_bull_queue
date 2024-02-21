const Bull = require("bull");
const { BullAdapter } = require("bull-board/bullAdapter");
const keys = require("../config/keys");
const config = require("../config/environment");

let redis = {
  port: config.redis.port,
  host: config.redis.host,
  password: config.redis.pass,
  db: config.redis.db, // if provided select a non-default redis db
};

const createQueue = function (param, data, options) {
  const Queue = new Bull(param, {
    redis: redis,
  });
  Queue.add(data, options);
  return Queue;
};

const createQueueWithData = async function (param, data, options) {
  const Queue = new Bull(param, {
    redis: redis,
  });
  const data2 = await Queue.add(data, options);
  return data2;
};

const createBull = function () {
  let Queues = Object.keys(keys).map((key) => {
    let queue = new Bull(keys[key], {
      redis: redis,
    });
    let bull = new BullAdapter(queue);
    return bull;
  });

  return Queues;
};

const removeQueue = function (param, id) {
  const Queue = new Bull(param, {
    redis: redis,
  });
  Queue.getJob(id).then((Job) => {
    if (!Job) {
      console.log("job doesn't exist !!");
      return;
    }
    console.log(id, "job id");
    Job.remove(function (err) {
      console.log(" err ========== ", err);
      if (err) throw err;
    });
  });
};

const Queues = function (Queue) {
  Queue.on("completed", (job) => {
    console.log(`Job completed with result ${job}`);
  });
  Queue.on("active", (job) => {
    console.log(`Job active with result ${job}`);
  });
  Queue.on("wait", (job) => {
    console.log(`Job wait with result ${job}`);
  });

  Queue.on("failed", (job) => {
    console.log(`Job failed with result ${job}`);
  });
};

module.exports = {
  createQueue,
  createBull,
  removeQueue,
  Queues,
  createQueueWithData,
};
