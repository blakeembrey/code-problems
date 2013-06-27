module.exports = function (a, b) {
  return a.length === b.length && (a + a).indexOf(b) > -1;
};
