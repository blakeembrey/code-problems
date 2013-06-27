// Use an object to map sets of brackets to their opposites
var brackets = {
  '(': ')',
  '{': '}',
  '[': ']'
};

// On each input string, process it using the balance checker
module.exports = function (string) {
  var stack = [];
  // Process every character on input
  for (var i = 0; i < string.length; i++) {
    if (brackets[stack[stack.length - 1]] === string[i]) {
      stack.pop();
    } else {
      stack.push(string[i]);
    }
  }

  return !stack.length;
};
