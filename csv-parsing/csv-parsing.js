process.stdin.resume();
process.stdin.setEncoding('utf8');

var data  = '';

process.stdin.on('data', function (chunk) {
  data += chunk;
});

process.stdin.on('end', function () {
  var csv      = data.trim(),
      isNumber = false,
      isInput  = false,
      curr     = '',
      stack    = [],
      char,
      pushStack;

  pushStack = function (input) {
    isNumber && (input = +input);
    // Resets
    curr     = '';
    isInput  = false;
    isNumber = false;
    stack.push(input);
  };

  while (char = csv.charAt(0)) {
    if (char === '"') {
      isInput = !curr;
    } else if (char === ',') {
      if (isInput && !isNumber) {
        curr += char;
      } else {
        pushStack(curr);
      }
    } else if ((isNumber || !curr) && !Number.isNaN(+char)) {
      curr    += char;
      isInput  = true;
      isNumber = true;
    } else {
      if (isNumber || !isInput) { throw new Error('Unexpected character'); }
      curr += char;
    }
    csv = csv.substr(1);
  }

  // Push the trailing entry
  pushStack(curr);

  stack.forEach(function (output) {
    console.log(JSON.stringify(output));
  });
});
