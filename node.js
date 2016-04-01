(function(module) {
  function Node(val, next, prev) {
    this.val = val;
    this.next = next || null;
    this.prev = prev || null;
  }

  module.Node = Node;
})(window)
