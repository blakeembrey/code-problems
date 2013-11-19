// Please note: This can be accomplished using `JSON.parse('[' + csv + ']')`
module.exports = function (csv) {
  var isNumber = false,
      isInput  = false,
      curr     = '',
      stack    = [],
      i        = 0,
      char,
      pushStack;

  csv = csv.trim();

  pushStack = function (input) {
    isNumber && (input = +input);
    // Resets
    curr     = '';
    isInput  = false;
    isNumber = false;
    stack.push(input);
  };

  while (char = csv.charAt(i++)) {
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
  }

  // Push the trailing entry
  pushStack(curr);

  return stack;
};
