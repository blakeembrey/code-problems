var multiply = function (x, y) {
  var result = 0,
      length = y;
  while (length--) {
    result += x;
  }
  return result;
};

var divide = function (x, y) {
  var result   = x,
      quotient = -1,
      remain   = result;

  while (result > -1) {
    remain   = result;
    quotient += 1;
    result   -= y;
  }

  return quotient;
};

var modulo = function (x, y) {
  var result = x,
      remain = result;

  while (result > -1) {
    remain = result;
    result -= y;
  }

  return remain;
};
