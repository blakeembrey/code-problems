process.stdin.resume();
process.stdin.setEncoding('utf8');

// Use an object to map sets of brackets to their opposites
var brackets = {
  '(': ')',
  '{': '}',
  '[': ']'
};

// On each input data chunk, process it using the balance checker
process.stdin.on('data', function (chunk) {
  var stack = [];
  // Trim the chunk input
  chunk = chunk.trim();
  // Process every character on input
  for (var i = 0, l = chunk.length; i < l; i++) {
    if (brackets[stack[stack.length - 1]] === chunk[i]) {
      stack.pop();
    } else {
      stack.push(chunk[i]);
    }
  }

  console.log((stack.length ? 'not ' : '') + 'balanced');
});
