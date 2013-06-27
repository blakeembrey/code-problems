module.exports = function (str1, str2, combined) {
  // Generate all the posible paths between `str1` and `str2`
  var paths = {};

  // Check the string lengths are the same to begin
  if ((str1 + str2).length !== combined.length) {
    return false;
  }

  // Finding paths is essentially the anagrams solution
  (function findPath (str1, str2, path) {
    if (path.length === combined.length) { return paths[path] = true; }

    // Find the next path from the first character of either strings
    str1 && findPath(str1.substr(1), str2, path + str1.substr(0, 1));
    str2 && findPath(str1, str2.substr(1), path + str2.substr(0, 1));
  })(str1, str2, '');

  return combined in paths;
};
