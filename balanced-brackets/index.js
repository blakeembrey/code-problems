process.stdin.resume();
process.stdin.setEncoding('utf8');

var brackets = {
  ')': '(',
  '}': '{',
  ']': '['
};

process.stdin.on('data', function (chunk) {
  var stack = [];
  // Process each line on input
  chunk.split('').forEach(function (char) {
    // Ignore the new lines
    if (char === '\n') { return; }
    // Check that the character is the bracket definitions
    if (brackets[char] && brackets[char] === stack[stack.length - 1]) {
      return stack.pop();
    }
    stack.push(char);
  });

  console.log((stack.length ? 'not ' : '') + 'balanced');
});
