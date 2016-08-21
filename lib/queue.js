'use strict';

const Node = require('./node.js');

function Queue(arr) {
  this.front = null;
  this.back = null;

  if (arr) { arr.forEach(ele => { this.enqueue(ele); }, this); }
}

Queue.prototype.enqueue = function(val) {
  //
};

Queue.prototype.dequeue = function() {

};
