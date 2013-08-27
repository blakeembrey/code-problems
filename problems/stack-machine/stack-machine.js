module.exports = function (S) {
  var stack = [];

  var requires = function (fn) {
    return function (a, b) {
      if (a == null || b == null) {
        throw new Error('Need both arguments to continue');
      }
      return fn.call(this, a, b);
    };
  };

  var addition = requires(function (a, b) {
    return a + b;
  });

  var multiply = requires(function (a, b) {
    return a * b;
  });

  try {
    for (var i = 0; i < S.length; i++) {
      if (S[i] === '+') {
        stack.push(addition.call(null, stack.pop(), stack.pop()));
      } else if (S[i] === '*') {
        stack.push(multiply.call(null, stack.pop(), stack.pop()));
      } else {
        stack.push(+S[i]);
      }
    }
  } catch (e) {
    return -1;
  }

  return stack.length ? stack.pop() : -1;
};
