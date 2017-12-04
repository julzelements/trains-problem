'use strict';

// New up the logger in the Greeter object

var Greeter = function() {    
}

Greeter.prototype.greet = function(string) {
    var logger = require('./logger');
    logger.log(string);
}

module.exports = new Greeter();