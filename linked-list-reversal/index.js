var createLinkedList = function () {
  var linkedList = {
    head: null,
    tail: null
  };

  var createNode = function (value) {
    return {
      value: value,
      next: null
    };
  };

  linkedList.append = function (value) {
    var node = createNode(value);
    this.tail && (this.tail.next = node);

    this.head || (this.head = node);
    this.tail = node;

    return node;
  };

  linkedList.reverse = function () {
    var node = this.head,
        next;

    while (node) {
      next = node.next;
      node.next = this.head;
      this.head = node;

      node = next;
    }
  };

  return linkedList;
};
