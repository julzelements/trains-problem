#!/usr/bin/env node

'use strict';

const logger = require("./logger");

exports.greet = (greeting, logger) => logger.log(greeting);

