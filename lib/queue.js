'use strict';

const Node = require('./node.js');

function Queue(arr) {
  this.front = null;
  this.back = null;
  this.size = 0;

  if (arr) { arr.forEach(ele => { this.enqueue(ele); }, this); }
}

Queue.prototype.enqueue = function(val) {
  //
};

Queue.prototype.dequeue = function() {

};
