var isSubsetOf = function (parent, child) {
  var childIndex = 0,
      checkChild;

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

  for (var i = 0, l = parent.length; i < l; i++) {
    if (checkChild(parent[i], child[childIndex])) { return true; }
  }

  return false;
};
