var LinkedList = module.exports = function (value) {
  this.value = value;
  this.prev  = this;
  this.next  = this;
};

LinkedList.prototype.appendNode = function (value) {
  var node  = new LinkedList(value);
  node.prev = this;
  node.next = this.next;
  // Fix the linked list references
  this.next = this.next.prev = node;
  return node;
};

LinkedList.prototype.prependNode = function (value) {
  var node  = new LinkedList(value);
  node.prev = this.prev;
  node.next = this;
  // Fix the linked list references
  this.prev = this.prev.next = node;
  return node;
};

LinkedList.prototype.removeNode = function () {
  // Create a reference around the node to be removed
  this.prev.next = this.next;
  this.next.prev = this.prev;
  // Remove existing references to the current list
  this.next = this.prev = this;
  return this;
};

LinkedList.prototype.containsNode = function (value) {
  if (this.value === value) { return true; }

  var node = this.next;
  // Loop through the connections until we hit ourselves again
  while (node !== this) {
    if (node.value === value) {
      return true;
    }
    node = node.next;
  }

  return false;
};
