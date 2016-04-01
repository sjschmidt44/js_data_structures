// node and list class
// methods:
//   size, search, display, remove insert pop

(function(module) {
  // Stretch - take an array of values and create list.
  function linkedList() {
    this.current = null;
    this.head = null;
    this.length = null;
  }
  linkedList.prototype.size = function() {
    return 'The Linked List is ' + this.length;
  }
  linkedList.prototype.insert = function(val) {
    // Insert new node at the head of the list
    try {
      if (typeof val === 'undefined') {
        throw "ValueError: Please enter a value for the node.";
      } else {
        this.head = new Node(val, this.head);
        this.length += 1;
        return null;
      }
    } catch (e) {
      return "There was an error: \n" + e;
    }
  },
  linkedList.prototype.remove = function(val) {
    // Remove given node from list; return null

  },
  linkedList.prototype.pop = function() {
    // Remove the first node from the head of the list; return node val
    try {
      this.current = this.head;
      this.head = this.head.next;
      this.length -= 1;
      return this.current.val;
    } catch (e) {
      return "There was an error: \n" + e;
    }
  },
  linkedList.prototype.search = function(val) {
    // Return given node if exists in list; returns null

  },
  linkedList.prototype.display = function() {
    // Return the linked list as a string of values

  }

  module.linkedList = linkedList;
})(window)
