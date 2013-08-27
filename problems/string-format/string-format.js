module.exports = function (string /* , args */) {
  var args = Array.prototype.slice.call(arguments, 1);

  return string.replace(/\{(\d+)\}/g, function (_, arg) {
    return arg in args ? args[arg] : _;
  });
};
