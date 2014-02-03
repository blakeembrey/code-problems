//Method 4 (Using In-Order Traversal) 
//Reference: 
// http://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/
module.exports = function(bst) {
  if (!bst || bst.value == null) {
    return false;
  }

  var prev;

  return (function isBst(root) {
    if (!root) {
      return true;
    }

    if (!isBst(root.left)) {
      return false;
    }

    if (prev && prev.value >= root.value) {
      return false;
    }

    prev = root;

    return isBst(root.right);

  })(bst);
};