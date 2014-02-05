var root,
  createNode,
  add,
  search,
  addSubNode,
  findRightMost,
  replaceNodeInParent,
  binaryTreeDelete; // not overwrite keyword.

createNode = function createNode(num) {
  return {
    add: add,
    search: search,
    delete: binaryTreeDelete,
    left: undefined,
    right: undefined,
    value: num
  };
};

addSubNode = function(num, direct) {
  if (this[direct] === undefined) {
    this[direct] = createNode(num);
  } else {
    this[direct].add(num);
  }
};

add = function(num) {
  if (this.value === undefined) {
    this.value = num;
  } else {
    if (num < this.value) {
      addSubNode.apply(this, [num, 'left']);
    } else if (num > this.value) {
      addSubNode.apply(this, [num, 'right']);
    } //ignore the existed one.
  }

  //always return root
  return root;
};

search = function(num) {
  if (num === this.value) {
    return this;
  } else if (num < this.value && this.left) {
    return this.left.search(num);
  } else if (num > this.value && this.right) {
    return this.right.search(num);
  } else {
    return false;
  }
};

findRightMost = function() {
  if (this.right === undefined) {
    return this;
  }
  return findRightMost.call(this.right);
};

replaceNodeInParent = function(parent, newNode) {
  if (parent.left === this) {
    parent.left = newNode;
  } else {
    parent.right = newNode;
  }
};


binaryTreeDelete = function(num, parent) {
  var successor;
  //if only root in the true; 
  if (root === this && this.left === undefined && this.right === undefined) {
    root = undefined;
    return root;
  }

  if (num < this.value) {
    return this.left ? this.left.delete(num, this) : root;
  } else if (num > this.value) {
    return this.right ? this.right.delete(num, this) : root;
  } else {
    //delete key here
    if (this.left !== undefined && this.right !== undefined || root === this) {
      successor = findRightMost.call(this.left);
      this.value = successor.value;
      this.left.delete(successor.value, this);
    } else if (this.left) {
      replaceNodeInParent.apply(this, [parent, this.left]);
    } else if (this.right) {
      replaceNodeInParent.apply(this, [parent, this.right]);
    } else {
      replaceNodeInParent.apply(this, [parent]); //replace with undefined
    }
  }
  return root;
};

module.exports = (root = createNode(undefined));