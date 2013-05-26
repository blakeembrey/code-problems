var htmlEscaper = function (string) {
  var escapeCharacter = function (letter) {
    var charCode = letter.charCodeAt(0),
        // Store all the character codes into variables
        DASH     = 45,
        PERIOD   = 46,
        ZERO     = 48,
        NINE     = 57,
        A        = 65,
        Z        = 90,
        a        = 97,
        z        = 122;

    // If they need escaping, return the hex code prefixed with a percent sign
    // All the character code ranges here are the safe characters
    if ((charCode < DASH || charCode > PERIOD) && (charCode < ZERO || charCode > NINE) && (charCode < A || charCode > Z) && (charCode < a || charCode > z)) {
      // Return the character as the base 16 equivalant
      return '%' + charCode.toString(16).toUpperCase();
    }

    return letter;
  };

  // Using the built in map method since it makes life a lot easier
  return string.split('').map(escapeCharacter).join('');
};
