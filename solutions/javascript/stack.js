var Stack = module.exports = function () {
  this.head   = null;
  this.length = 0;
};

Stack.prototype.push = function (value) {
  var node = {
    value: value,
    next: null
  };

  if (!this.head) {
    this.head = node;
  } else {
    node.next = this.head;
    this.head = node;
  }

  return this.length += 1;
};

Stack.prototype.pop = function () {
  // If there is no head node, return `undefined`
  if (!this.head) { return; }

  var node = this.head;

  // Update the head reference and remove the next node reference from the
  // previous head.
  this.head = node.next;
  node.next = null;

  this.length -= 1;

  return node.value;
};
