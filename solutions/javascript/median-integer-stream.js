// This question is easier for me to visualise using a linked list and keeping
// track of the median node in the linked list - then inserting either before
// or after the node and moving the node left/right.

var LinkedList = function (value) {
  this.value = value;
};

LinkedList.prototype.append = function (value) {
  var node  = new LinkedList(value);
  node.prev = this;
  node.next = this.next;
  // Fix the linked list node references.
  this.next && (this.next.prev = node);
  this.next = node;
  return node;
};

LinkedList.prototype.prepend = function (value) {
  var node  = new LinkedList(value);
  node.prev = this.prev;
  node.next = this;
  // Fix the linked list node references.
  this.prev && (this.prev.next = node);
  this.prev = node;
  return node;
};

module.exports = function () {
  return {
    insert: function (number) {
      if (!this._median) {
        this._median = new LinkedList(number);
        return;
      }

      var node = this._median;
      var prevNode;

      // If the number is greater than the median value, need to insert
      // somewhere after the current median node.
      if (number > this._median.value) {
        while (node && node.value < number) {
          prevNode = node;
          node     = node.next;
        }
        (node || prevNode).append(number);
        // Increment the counter of right nodes.
        ++this._right;
      } else {
        while (node && node.value > number) {
          prevNode = node;
          node     = node.prev;
        }
        (node || prevNode).prepend(number);
        // Increment the counter of left nodes.
        ++this._left;
      }

      // If the left nodes are larger than the right nodes, move the median
      // pointer.
      if (this._left > this._right + 1) {
        this._median = this._median.prev;
        --this._left;
        ++this._right;
      } else if (this._left < this._right) {
        this._median = this._median.next;
        ++this._left;
        --this._right;
      }
    },
    getMedian: function () {
      // If the left and right node counts are identical, we can return the
      // value exactly.
      if (this._left === this._right) {
        return this._median.value;
      }

      return (this._median.value + (this._median.prev.value)) / 2;
    },
    // Hold the median node in the list.
    _median: null,
    // Keep track of how many left and right nodes have been.
    _left: 0,
    _right: 0
  };
};
