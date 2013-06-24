module.exports = function (string) {
  var checkChar,
      prevCharacter;

  checkChar = (function () {
    var repeated = false;

    return function (char) {
      if (prevCharacter && char === prevCharacter) {
        repeated = true;
      }
      if (prevCharacter && char !== prevCharacter) {
        if (!repeated) { return true; }
        repeated = false;
      }
      prevCharacter = char;
      // Return false to say it's not been repeated
      return false;
    };
  })();

  // Interate one extra time past the last character
  for (var i = 0; i <= string.length; i++) {
    if (checkChar(string[i])) { return prevCharacter; }
  }
};
