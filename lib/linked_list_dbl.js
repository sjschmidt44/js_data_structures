'use strict';

const Node = require('./node');

function DoubleLinked(array) {
  this.head = null;
  this.tail = null;
  if (array) {
    array.forEach(function(ele) {
      this.insert(ele);
    }, this);
  }
}

DoubleLinked.prototype.insert = function() {

};

DoubleLinked.prototype.append = function () {

};

DoubleLinked.prototype.pop = function () {

};

DoubleLinked.prototype.shift = function () {

};

DoubleLinked.prototype.remove = function () {

};

// Display and Sort optionals
module.exports = DoubleLinked;
