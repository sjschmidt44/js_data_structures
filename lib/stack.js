'use strict';

const Node = require('./node.js');

function Stack(arr, maxSize) {
  this.top = null;
  this.maxSize = maxSize;
  this.size = 0;

  if (arr) { arr.forEach(ele => { this.push(ele); }); }
}

Stack.prototype.push = function () {

};

Stack.prototype.pop = function() {

};

Stack.prototype.peek = function() {

};

module.exports = Stack;
