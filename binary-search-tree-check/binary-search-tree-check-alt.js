// depth first traversal checking sort order of each node's value against previous

var isBinarySeachTree = function(bst) {
  // reference to previous node value
  var prev;

  // return IIFE of recursive bst traversal
  return (function isBST(bst) {

    // if left, check left and break if necessary
    if ( bst.left && !isBST(bst.left) ) { return false; }

    // break if current node value is less than previous
    if ( bst.value < prev ) { return false; }

    // set previous to current node value
    prev = bst.value;

    // if right, check right and break if necessary
    if (bst.right && !isBST(bst.right) ) { return false; }

    // passes test
    return true;

  })(bst);

};