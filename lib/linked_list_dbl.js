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

DoubleLinked.prototype.insert = function(val) {
  try {
    if (!val) { throw new ReferenceError('Please enter a value.') }
    this.head = new Node(val, null, this.head);
    this.tail = !this.tail ? this.head : this.tail;
    return null;
  } catch(e) {
    return e;
  }
};

DoubleLinked.prototype.append = function (val) {
  try {
    if (!val) { throw new ReferenceError('Please enter a value.') }
    this.tail = new Node(val, this.tail);
    this.head = !this.head ? this.tail : this.head;
    return null;
  } catch(e) {
    return e;
  }
};

DoubleLinked.prototype.pop = function () {

};

DoubleLinked.prototype.shift = function () {

};

DoubleLinked.prototype.remove = function () {

};

// Display and Sort optionals
module.exports = DoubleLinked;
