'use strict';

// Abstract away the logger dependency

const logger = require("./logger");

const Greeter = function() {
    this.logger = logger;
}

Greeter.prototype.greet = function(greeting) {
    this.logger.log(greeting);
}

module.exports = new Greeter(logger);