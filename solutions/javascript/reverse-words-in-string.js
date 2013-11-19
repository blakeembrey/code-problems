module.exports = function (string) {
  return string.split(/\s+/g).reverse().join(' ');
};
