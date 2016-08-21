'use strict';

const Node = require('./node');

function LinkedList(array) {
  this.current = null;
  this.head = null;
  this.length = 0;

  if (array) {
    array.forEach(function(val) {
      this.insert(val);
    }, this);
  }
}

LinkedList.prototype.size = function() {
  try {
    if (this.length === 0) {
      throw new RangeError('There are no nodes in the list.');
    } else {
      return this.length;
    }
  } catch (e) {
    return e;
  }
};

LinkedList.prototype.insert = function(val) {
  try {
    if (typeof val === 'undefined') {
      throw new ReferenceError('Please enter a value for the node.');
    } else {
      this.head = new Node(val, this.head);
      this.length += 1;
      return null;
    }
  } catch (e) {
    return e;
  }
};

LinkedList.prototype.remove = function(val) {
  try {
    if (typeof val === 'undefined') {
      throw new ReferenceError('Please enter a value for the node.');
    } else if (this.search(val) === false){
      throw new ReferenceError('That node does not exist in the list.');
    } else {
      this.current = this.head;
      if (this.head.val === val) {
        this.head = this.current.next;
        this.current = null;
        this.length -= 1;
        return this.current;
      } else {
        while (this.current.next) {
          if (this.current.next.val === val) {
            this.current.next = this.current.next.next;
            this.length -= 1;
            return null;
          } else {
            this.current = this.current.next;
          }
        }
      }
    }
  } catch (e) {
    return e;
  }
};

LinkedList.prototype.pop = function() {
  try {
    this.current = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return this.current.val;
  } catch (e) {
    return e;
  }
};

LinkedList.prototype.search = function(val) {
  try {
    if (typeof val === 'undefined') {
      throw new ReferenceError('Please enter a value for the node.');
    } else {
      this.current = this.head;
      while (this.current.next) {
        if (this.current.val === val) {
          return this.current.val;
        } else {
          this.current = this.current.next;
        }
      }
      if (this.current.val === val) {
        return this.current.val;
      } else {
        return false;
      }
    }
  } catch (e) {
    return e;
  }
};

LinkedList.prototype.display = function() {
  var nodes = [];
  this.current = this.head;
  for (var i = this.length; i > 0; i--) {
    nodes.push(this.current.val);
    this.current = this.current.next;
  }
  return nodes.toString();
};

module.exports = LinkedList;
