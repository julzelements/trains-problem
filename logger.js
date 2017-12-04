"use strict";

var Logger = function () {};

Logger.prototype.log = function (string) {
    console.log(string);
};

module.exports = new Logger();