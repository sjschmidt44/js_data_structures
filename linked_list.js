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
    try {
      if (typeof val === 'undefined') {
        throw "ValueError: Please enter a value for the node.";
      } else {
        this.current = this.head;
        if (this.current.val === val) {
          console.log('first');
          this.head = this.current.next;
          this.length -=1;
          return;
        } else if (this.current.val !== val){
          console.log('else if');
          this.current = this.current.next;
          for (var i = this.length - 1; i > 0; i--) {
            // Recursive solution?
          }
        } else {
          console.log('else');
          return "Node does not exist in list.";
        }
      }
    } catch (e) {
      return 'There was an error \n' + e;
    }
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
    // Return given node if exists in list; else returns null
    try {
      if (typeof val === 'undefined') {
        throw "ValueError: Please enter a value for the node.";
      } else {
        this.current = this.head;
        while (this.current.next !== null) {
          if (this.current.val === val) {
            return this.current;
          } else {
            this.current = this.current.next;
          }
        }
        if (this.current.val === val) {
          return this.current;
        } else {
          return false;
        }
      }
    } catch (e) {
      return "There was an error: \n" + e;
    }
  },
  linkedList.prototype.display = function() {
    // Return the linked list as a string of values

  }

  module.linkedList = linkedList;
})(window)
