const _ = require("lodash");

const env = process.env.NODE_ENV || 'local'; // development, qa, production
module.exports = _.merge(
    require("./shared"),
    require("./" + env + ".js") || {}
  );