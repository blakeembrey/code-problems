module.exports = function (root) {
  // Doing a breadth first search using recursion.
  (function walkLevel (children) {
    // Create a new queue for the next level.
    var queue = [],
        output;

    // Use the map function to easily join all the nodes together while pushing
    // it's children into the next level queue.
    output = children.map(function (node) {
      // Assuming the node has children stored in an array.
      queue = queue.concat(node.children || []);
      return node.value;
    }).join(' ');

    // Log the output at each level.
    console.log(output);

    // If the queue has values in it, recurse to the next level and walk
    // along it.
    queue.length && walkLevel(queue);
  })([root]);
};
