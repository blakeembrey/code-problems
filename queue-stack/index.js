var Stack = function () {
  // Over simplification of stack implementation using array
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
  // When the reserve stack has nothing in the storage, move everything from the
  // stack to the reserve stack
  if (!this.reserve.storage.length) {
    while (this.stack.storage.length) {
      this.reserve.add(this.stack.remove());
    }
  }

  return this.reserve.remove();
};
