var generateGrid = function (width, height) {
  var output = [],
      number = 0;

  for (var i = 0; i < height; i++) {
    for (var l = 0; l < width; l++) {
      output[i] || (output[i] = []);
      output[i].push(number += 1);
    }
  }

  return output;
};

var spiralTraversal = function (grid, top, left) {
  var length    = 1, // This will be the length to traverse to
      output    = [],
      UP        = 0,
      LEFT      = 1,
      DOWN      = 2,
      RIGHT     = 3,
      maxLength,
      pushNumber;

  top  = top - 1;
  left = left - 1;

  maxLength = (grid.length > grid[0].length ? grid.length : grid[0].length);

  pushNumber = function (y, x) {
    top  = y;
    left = x;
    return grid[top] && grid[top][left] && output.push(grid[top][left]);
  };

  // Push the first number into the output array
  pushNumber(top, left);

  (function traverse (direction, length) {
    var i = length;

    while (i--) {
      if (direction === UP) {
        pushNumber(top - 1, left);
      } else if (direction === LEFT) {
        pushNumber(top, left - 1);
      } else if (direction === DOWN) {
        pushNumber(top + 1, left);
      } else if (direction === RIGHT) {
        pushNumber(top, left + 1);
      }
    }

    // When the length is longer than the max length, break recursion
    if (length > maxLength) { return; }

    // When we are finished going left or rigth, increase the length
    if (direction === LEFT || direction === RIGHT) { length += 1; }

    // Change the direction of traversal
    direction += 1;
    if (direction > RIGHT) { direction = 0; }

    traverse(direction, length);

  })(UP, length);

  return output;
};

// Generate the traversed output
module.exports = function (h, w, r, c) {
  return spiralTraversal(generateGrid(w, h), r, c);
};
