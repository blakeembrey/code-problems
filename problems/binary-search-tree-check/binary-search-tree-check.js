var lessThan,
  greaterThan,
  check;

// function for check stack
lessThan = function lessThan(val1, val2) {
  return val1 < val2;
};

// function for check stack
greaterThan = function greaterThan(val1, val2) {
  return val1 > val2;
};

// check function
// checks value against the check stack 
check = function check(val, checkStack) {
  var i,
    result = true;
  for (i = 0; i < checkStack.length && result; i++) {
    result = result && checkStack[i].compare(val, checkStack[i].value);
  }
  return result;
};
  
module.exports = function isBST (bst, checkStack) {

  if (!checkStack) { // if checkStack is not defined initialize it
    checkStack = [];
  }
  if (!bst || bst.value === undefined) { // if tree is not defined
    return false;
  }
  if (bst.left && bst.left.value > bst.value) { // if left value is greater than current value
    return false;
  }
  if (bst.right && bst.right.value < bst.value) { // if right value is smaller than current value
    return false;
  }
  
  if (!check(bst.value, checkStack)) { // if checking value against checkStack fails
    return false;
  }
  
  checkStack.push({ // push value and lessThan (for left subtree) on stack
    value: bst.value,
    compare: lessThan
  });
  
  if (bst.left && !isBST(bst.left, checkStack)) { // if left subtree is no binary-search-tree
    return false;
  }
  
  checkStack.pop(); // remove left check from stack
  checkStack.push({ // push value and greaterThan (for right subtree) on stack
    value: bst.value,
    compare: greaterThan
  });
  if (bst.right && !isBST(bst.right, checkStack)) { // if right subtree is no binary-search-tree
    return false;
  }
  checkStack.pop(); // clean-up stack
  
  return true; // if none of the above killed test
};
