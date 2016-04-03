(function(module) {
  // Stretch - take an array of values and create list.
  function linkedList() {
    this.current = null;
    this.head = null;
    this.length = null;
  }

  linkedList.prototype.size = function() {
    try {
      if (this.length === null) {
        throw "IndexError: There are no nodes in the list.";
      } else {
        return 'The Linked List is ' + this.length;
      }
    } catch (e) {
      return "There was an error: " + e;
    }
  }

  linkedList.prototype.insert = function(val) {
    // Insert new node at the head of the list
    try {
      if (typeof val === 'undefined') {
        throw "ValueError: Please enter a value for the node.";
        // use this.search to validate if already exists; throw error if true
      } else {
        this.head = new Node(val, this.head);
        this.length += 1;
        return null;
      }
    } catch (e) {
      return "There was an error: \n" + e;
    }
  }

  linkedList.prototype.remove = function(val) {
    try {
      if (typeof val === 'undefined') {
        throw "ValueError: Please enter a value for the node.";
      } else if (this.search(val) === false){
        throw "ValueError: That node does not exist in the list.";
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
      return 'There was an error \n' + e;
    }
  }

  linkedList.prototype.pop = function() {
    try {
      this.current = this.head;
      this.head = this.head.next;
      this.length -= 1;
      return this.current.val;
    } catch (e) {
      return "There was an error: \n" + e;
    }
  }

  linkedList.prototype.search = function(val) {
    try {
      if (typeof val === 'undefined') {
        throw "ValueError: Please enter a value for the node.";
      } else {
        this.current = this.head;
        while (this.current.next) {
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
  }

  linkedList.prototype.display = function() {
    var nodes = [];
    this.current = this.head;
    for (var i = this.length; i > 0; i--) {
      nodes.push(this.current.val);
      this.current = this.current.next;
    }
    return nodes;
  }

  module.linkedList = linkedList;
})(window)
