'use strict';

const Node = require('./node');

function DoubleLinked(array) {
  this.head = null;
  this.tail = null;
  if(array) {
    array.forEach(function(ele) {
      this.insert(ele);
    }, this);
  }
}

DoubleLinked.prototype.insert = function(val) {
  try {
    if(!val) throw new ReferenceError('Please enter a value.');
    let prev_head = this.head;
    this.head = new Node(val, null, this.head);
    if(!prev_head) {
      this.tail = this.head;
    } else {
      prev_head.next = this.head;
    }
    return null;
  } catch(e) {
    return e;
  }
};

DoubleLinked.prototype.append = function (val) {
  try {
    if(!val) throw new ReferenceError('Please enter a value.');
    let prev_tail = this.tail;
    this.tail = new Node(val, this.tail);
    if(!prev_tail) {
      this.head = this.tail;
    } else {
      prev_tail.next = this.tail;
    }
    return null;
  } catch(e) {
    return e;
  }
};

DoubleLinked.prototype.pop = function () {
  try {
    if(!this.head) throw new ReferenceError('The list is empty');
    let prev_head = this.head;
    this.head = this.head.prev;
    this.head.next = null;
    prev_head.prev = null;
    return prev_head.val;
  } catch(e) {
    return e;
  }
};

DoubleLinked.prototype.shift = function () {
  try {
    if(!this.tail) throw new ReferenceError('The list is empty');
    let prev_tail = this.tail;
    this.tail = this.tail.next;
    this.tail.prev = null;
    prev_tail.next = null;
    return prev_tail.val;
  } catch(e) {
    return e;
  }
};

DoubleLinked.prototype.remove = function (val) {
  try {
    if(!val) throw new ReferenceError('Please enter a value');
    if(!this.head) throw new ReferenceError('The list is empty');
    if(this.head.val === val) return this.pop();
    let current = this.head;
    while (current.val !== val) {
      if (current.prev === null) throw RangeError('Value not in list.');
      current = current.prev;
    }
    current.next.prev = current.prev;
    current.prev.next = current.next;
    current.next = null;
    current.prev = null;
    return current.val;
  } catch(e) {
    return e;
  }
};

// Display and Sort optionals
module.exports = DoubleLinked;
