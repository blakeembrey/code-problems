exports.traversal = function (element, className) {
  var found = [];

  (function traverseDom (node) {
    // Store the current node and current nodes class in a temporary variable
    var currentNode, currentClass;

    // Loop through all the child nodes
    for (var i = 0; i < node.childNodes.length; i++) {
      currentNode  = node.childNodes[i];
      currentClass = currentNode.className;
      // Check if the class name exists within the current nodes class
      // I believe I learnt of this technique from jQuery source code
      if (currentClass && ~(' ' + currentClass + ' ').indexOf(' ' + className + ' ')) {
        found.push(currentNode);
      }
      // If the current node have more child nodes, continue traversing
      currentNode.childNodes && traverseDom(currentNode);
    }
  })(element);

  return found;
};

exports.regexp = function (element, className) {
  // This function takes an easier approach, using a regular expression and
  // getting all elements straight up using the asterisk selector
  var found    = [],
      regex    = new RegExp('(^| )' + className + '($| )'),
      elements = element.getElementsByTagName('*');

  // Loop through all the elements checking the class names against the
  // regular expression - when it suceeds just push it into the output array
  for (var i = 0; i < elements.length; i++) {
    if (regex.test(elements[i].className)) {
      found.push(elements[i]);
    }
  }

  return found;
};
