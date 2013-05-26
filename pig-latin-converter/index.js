var convertToPigLatin = function (string) {
  var pigLatinWord = function (word) {
    if (word.length === 1) { return word; }

    var firstLetter = word.substr(0, 1),
        returnWord  = word.substr(1);

    if (~['a', 'e', 'i', 'o', 'u'].indexOf(firstLetter.toLowerCase())) {
      return word + 'ay';
    }

    // Poor man's upper case check
    if (firstLetter === firstLetter.toUpperCase()) {
      returnWord = word.substr(1, 1).toUpperCase() + word.substr(2);
    }

    return returnWord + firstLetter.toLowerCase() + 'ay';
  };

  return string.replace(/\w+/g, pigLatinWord);
};
