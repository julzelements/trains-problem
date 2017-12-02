#!/usr/bin/env node

'use strict';

const _ = require('lodash');

console.log("hello world");

const myArray = ['apples', 'oranges', 'pears'];

_.forEach(myArray, value => {
console.log(value);
});
