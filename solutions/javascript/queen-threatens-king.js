/**
 * Checks if two points (p1 and p2) defined by the coordinates
 * passed as arguments are either horizontally, vertically or
 * diagonally (45°) aligned with one another.
 *
 * @param  {Number}   x1 x-coordinate of p1
 * @param  {Number}   y1 y-coordinate of p1
 * @param  {Number}   x2 x-coordinate of p2
 * @param  {Number}   y2 y-coordinate of p2
 * @return {Boolean}  True if the points are aligned (horz / vert / diag)
 */
module.exports = function (x1, y1, x2, y2) {

  // Validate coordinate values
  var validArgs = Array.prototype.slice.call(arguments).every(function (coord) {
    return typeof coord === 'number';
  });

  if (!validArgs) {
    throw new Error('All coordinates must numbers');
  }

  return x1 === x2 || y1 === y2 || Math.abs(x1 - x2) === Math.abs(y1 - y2);

};
