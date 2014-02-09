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

addSubNode = function(node, direct, num) {
  if (node[direct] === undefined) {
    node[direct] = createNode(num);
  } else {
    node[direct].add(num);
  }
};

add = function(num) {
  // Add the value to the correct side of the binary search tree. 
  // If the value is the same as the current node, we'll just ignore it.
  if (this.value === undefined) {
    this.value = num;
  } else {
    if (num < this.value) {
      addSubNode(this, 'left', num);
    } else if (num > this.value) {
      addSubNode(this, 'right', num);
    }
  }
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

findRightMost = function(node) {
  if (node.right === undefined) {
    return node;
  }
  return findRightMost(node.right);
};

replaceNodeInParent = function(node, parent, newNode) {
  // root's parent is undefined.
  if (parent === undefined) {
    if (newNode) {
      root.value = newNode.value,
      root.left = newNode.left,
      root.right = newNode.right;
    }else{
      root.value=undefined;
    }
    return;
  }

  if (parent.left === node) {
    parent.left = newNode;
  } else {
    parent.right = newNode;
  }
};


binaryTreeDelete = function(num, parent) {
  var successor;
  if (num < this.value) {
    return this.left ? this.left.delete(num, this) : root;
  } else if (num > this.value) {
    return this.right ? this.right.delete(num, this) : root;
  } else {
    // delete key here
    if (this.left !== undefined && this.right !== undefined) {
      successor = findRightMost(this.left);
      this.value = successor.value;
      this.left.delete(successor.value, this);
    } else if (this.left) {
      replaceNodeInParent(this, parent, this.left);
    } else if (this.right) {
      replaceNodeInParent(this, parent, this.right);
    } else {
      replaceNodeInParent(this, parent); // replace with undefined
    }
  }
  return root;
};

module.exports = (root = createNode(undefined));