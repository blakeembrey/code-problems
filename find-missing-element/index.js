var findMissingElement = function (a, b) {
  var hash = {}, i;

  for (i = 0; i < b.length; i++) {
    hash[b[i]] = hash[b[i]] + 1 || 1;
  }

  for (i = 0; i < a.length; i++) {
    if (!hash[a[i]]) {
      return a[i];
    }
    hash[a[i]] -= 1;
  }
};

var findMissingElement = function (a, b) {
  var result = 0;
  a.concat(b).forEach(function (num) {
    result ^= num;
  });
  return result;
};
