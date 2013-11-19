var Queue = module.exports = function () {
  this.head   = null;
  this.tail   = null;
  this.length = 0;
};

Queue.prototype.enqueue = function (value) {
  var node = {
    value: value,
    next: null
  };

  // If there is currently no head node, set it to the current node.
  if (!this.head) {
    this.head = node;
  }

  // If we have a tail node already, set it's next property to be the current
  // node.
  if (this.tail) {
    this.tail.next = node;
  }

  // Update the tail to be the next node.
  this.tail = node;

  return this.length += 1;
};

Queue.prototype.dequeue = function () {
  if (!this.head) { return; }

  var node = this.head;

  // Update the head reference and remove the next node reference from the
  // previous head.
  this.head = node.next;
  node.next = null;

  // Remove the tail node if we have no more head node.
  if (!this.head) { this.tail = null; }

  this.length -= 1;

  return node.value;
};
