module.exports = function flatten (array) {
  return array.reduce(function (arr, val) {
    // Concat is extremely slow which leads to this being the slowest solution.
    return arr.concat(Array.isArray(val) ? flatten(val) : val);
  }, []);
};
