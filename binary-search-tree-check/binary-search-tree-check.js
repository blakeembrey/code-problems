module.exports = function isBST (bst) {
  var test;

  // Break the recursion if the left or right node is bigger than the current
  // node or if the left node is larger than the right node
  if (bst.left && bst.left.value > bst.value) { return false; }
  if (bst.right && bst.right.value > bst.value) { return false; }
  if (bst.left && bst.right && bst.left.value > bst.right.value) { return false; }

  return (test = bst.left && isBST(bst.left) && bst.right && isBST(bst.right)) === undefined ? true : test;
};
