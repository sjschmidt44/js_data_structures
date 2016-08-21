'use strict';

const Node = require('./node.js');

function Stack(arr, maxSize) {
  this.maxSize = maxSize || null;
  this.top = null;
  this.size = 0;

  if (arr) { arr.forEach(ele => { this.push(ele); }, this); }
}

Stack.prototype.push = function(val) {
  try {
    if (!val) throw new ReferenceError('Please enter a valid value');
    if (this.size === this.maxSize) throw new RangeError('Max stack size exceeded');
    this.top = new Node(val, this.top);
    this.size += 1;
    return null;
  } catch(e) {
    return e;
  }
};

Stack.prototype.pop = function() {
  try {
    if (!this.size) throw new ReferenceError('Stack is empty!');
    let popVal = this.top;
    this.top = this.top.next;
    this.size -= 1;
    return popVal.val;
  } catch(e) {
    return e;
  }
};

Stack.prototype.peek = function() {
  try {
    if (!this.size) throw new ReferenceError('Stack is empty!');
    return this.top.val;
  } catch(e) {
    return e;
  }
};

module.exports = Stack;
