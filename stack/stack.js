var StackError = module.exports.StackError = function (message) {
  this.name = 'StackError';
  this.message = message || '';
};

StackError.prototype = new Error();
StackError.prototype.constructor = StackError;

var Stack = module.exports.Stack = function () {
  this.head   = null;
  this.length = 0;
};

Stack.prototype.push = function (value) {
  var node = {
    value: value,
    next: null
  };

  if (this.head === null) {
    this.head = node;
  } else {
    node.next = this.head;
    this.head = node;
  }

  return this.length += 1;
};

Stack.prototype.pop = function () {
  // If there is no head node, return `undefined`
  if (this.head === null) {
    throw new StackError('stack empty on pop');
  }

  var node = this.head;

  // Update the head reference and remove the next node reference from the previous head
  this.head = node.next;
  node.next = null;

  this.length -= 1;

  return node.value;
};
