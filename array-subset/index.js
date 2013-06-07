var isSubsetOf = function (parent, child) {
  var childIndex = 0,
      checkChild;

  // Can break early if the child is larger than the parent array
  if (child.length > parent.length) { return false; }

  // Simple helper function to increment the child index check
  checkChild = function (a, b, breakLoop) {
    if (a === b) {
      childIndex += 1;
      return childIndex === child.length;
    }
    childIndex = 0;
    // Need a flag to make sure there is a way to break an infinite loop
    if (breakLoop) { return false; }
    return checkChild(a, child[childIndex], true);
  };

  for (var i = 0; i < parent.length; i++) {
    if (checkChild(parent[i], child[childIndex])) { return true; }
  }

  return false;
};
