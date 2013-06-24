module.exports = function (word, text) {
  var positions = [],
      cleanWord;

  cleanWord = function (clean) {
    // Simple function that will return true or false based on if the character is a letter
    var isLetter = function (letter) {
      var charCode = letter.charCodeAt(0);
      return (charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90);
    };

    // If the first character is not a letter, replace it
    if (!isLetter(clean[0])) {
      clean = ' ' + clean.substr(1);
    }

    // If the last character is not a letter, also replace it
    if (!isLetter(clean[clean.length - 1])) {
      clean = clean.slice(0, -1) + ' ';
    }

    // Pad the word if it's shorter than the comparator, e.g. it's the last word
    return clean + (clean.length === word.length + 2 ? '' : ' ');
  };

  for (var i = 1; i < text.length - word.length + 1; i++) {
    if (cleanWord(text.substr(i - 1, word.length + 2)) === (' ' + word + ' ')) {
      positions.push(i);
    }
  }

  return positions;
};
