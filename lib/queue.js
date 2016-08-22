'use strict';

const Node = require('./node.js');

function Queue(arr) {
  this.front = null;
  this.back = null;

  if (arr) { arr.forEach(ele => { this.enqueue(ele); }, this); }
}

Queue.prototype.enqueue = function(val) {
  try {
    if (!val) { throw new ReferenceError('Please enter a value');}
    if (!this.back) {
      this.back = new Node(val, this.front, this.back);
      this.front = this.back;
      return null;
    }
    this.back = new Node(val, this.back);
    this.back.next.prev = this.back;
    return null;
  } catch(e) {
    return e;
  }
};

Queue.prototype.dequeue = function() {
  try {
    if (!this.back && !this.front) {
      throw new ReferenceError('The queue is empty.');
    }
    let frontNode = this.front;
    if (this.back === this.front) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.prev;
      this.front.next = null;
      this.back = !this.front ? null : this.back;
    }
    return frontNode.val;
  } catch(e) {
    return e;
  }
};

module.exports = Queue;
