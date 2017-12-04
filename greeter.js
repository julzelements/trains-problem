'use strict';

// Make logger a dependency of greeter.js

const logger = require("./logger");

const Greeter = function(logger) {
    this.logger = logger;
}

Greeter.prototype.greet = function(greeting) {
    this.logger.log(greeting);
}

module.exports = new Greeter(logger);