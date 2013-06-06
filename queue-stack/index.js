var Stack = function() {
  this.storage = [];
};

Stack.prototype.add = function () {
  return this.storage.push.apply(this.storage, arguments);
};

Stack.prototype.remove = function () {
  return this.storage.pop();
};

var Queue = function() {
  this.stack   = new Stack();
  this.reserve = new Stack();
};

Queue.prototype.add = function () {
  return this.stack.add.apply(this.stack, arguments);
};

Queue.prototype.remove = function () {
  var returns, value;

  while (value = this.stack.remove()) {
    this.reserve.add(value);
  }

  // Remove the last value to return
  returns = this.reserve.remove();

  while (value = this.reserve.remove()) {
    this.stack.add(value);
  }

  return returns;
};
