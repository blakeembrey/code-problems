module.exports = function (bst) {
  // Return early if the tree does not exist.
  if (!bst || bst.value == null) {
    return false;
  }

  // Keep track of encountered nodes.
  var nodes = {};

  return (function isBST (bst) {
    if (bst.value == null || nodes[bst.value]) {
      return false;
    }

    // Add the current value to the nodes object.
    nodes[bst.value] = true;

    // The left value should be smaller than the current value.
    if (bst.left && bst.left.value > bst.value) {
      return false;
    }

    // The right value should be larger than the current value.
    if (bst.right && bst.right.value < bst.value) {
      return false;
    }

    // Check if we have each side and that each side is valid.
    return (!bst.left || isBST(bst.left)) && (!bst.right || isBST(bst.right));
  })(bst);
};
