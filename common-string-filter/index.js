var commonStringFinder = function (string) {
  var search = Array.prototype.slice.call(arguments, 1).join('').replace(/\W/g, ''),
      result = '',
      hash   = {};

  for (var j = 0; j < search.length; j++) {
    hash[search[j]] = true;
  }

  for (var i = 0; i < string.length; i++) {
    if (hash[string[i]] && !~result.indexOf(string[i])) {
      result += string[i];
    }
  }

  return result;
};
