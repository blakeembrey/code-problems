module.exports = function (string) {
  var output = '',
      hash   = {};

  for (var i = 0; i < string.length; i++) {
    if (!hash[string[i]]) {
      output += string[i];
    }
    hash[string[i]] = true;
  }

  return output;
};
