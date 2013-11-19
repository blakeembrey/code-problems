var root,
  createNode,
  add;

createNode = function createNode(num) {
  return {
    add: add,
    left: undefined,
    right: undefined,
    value: num
  };
};

add = function add(num) {
  if (this.value === undefined) {
    this.value = num;
  } else {
    if (num < this.value) {
      if (this.left === undefined) {
        this.left = createNode(num);
      } else {
        this.left.add(num);
      }
    } else if (num > this.value) {
      if (this.right === undefined) {
        this.right = createNode(num);
      } else {
        this.right.add(num);
      }
    } else {
      return false;
    }
  }
  return root;
};

module.exports = (root = createNode(undefined));
