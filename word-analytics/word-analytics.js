process.stdin.resume();
process.stdin.setEncoding('utf8');

// Use an object to map the characters to their count
var characters     = {},
    words          = {},
    wordsParagraph = {},
    isWordChar,
    filterObject,
    sortByCount;

filterObject = function (input, callback) {
  var output = {};

  Object.keys(input).forEach(function (value) {
    callback(input[value], value, input) && (output[value] = input[value]);
  });

  return output;
};

sortByCount = function (object) {
  return Object.keys(object).map(function (input) {
    return {
      value: input,
      count: object[input]
    };
  }).sort(function (a, b) {
    // Sort descending
    return b.count - a.count;
  }).map(function (input) {
    return input.value;
  });
};

isWordChar = function (char) {
  var charCode = char.charCodeAt(0);
  // Characters code not between A-Z
  return !(charCode < 65 || charCode > 90);
};

// On each input data chunk, process it using the balance checker
process.stdin.on('data', function (chunk) {
  var word       = '',
      prevSymbol = '\n',
      char;

  for (var i = 0; i < chunk.length; i++) {
    char = chunk[i].toUpperCase();

    // Increment the character count
    characters[char] = (characters[char] || 0) + 1;

    if (!isWordChar(char)) {
      if (word) {
        word && (words[word] = (words[word] || 0) + 1);
        prevSymbol === '\n' && (wordsParagraph[word] = (wordsParagraph[word] || 0) + 1);
        word       = ''; // Reset the current word
      }
      prevSymbol = char;
    } else {
      word += char;
    }
  }
});

process.stdin.on('end', function () {
  var sortedWords    = sortByCount(words),
      sortedLetters  = sortByCount(filterObject(characters, function (_, char) {
        return isWordChar(char);
      })),
      sortedWordPara = sortByCount(wordsParagraph),
      totalWords     = Object.keys(words).reduce(function (memo, word) {
        return memo + words[word];
      }, 0),
      totalLetters   = Object.keys(characters).reduce(function (memo, char) {
        return memo + (isWordChar(char) ? characters[char] : 0);
      }, 0),
      totalSymbols   = Object.keys(characters).reduce(function (memo, char) {
        return memo + (/[^\w\s]/.test(char) ? characters[char] : 0);
      }, 0),
      unusedLetters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(function (char) {
        return !characters[char];
      }),
      onceWords      = Object.keys(words).filter(function (word) {
        return words[word] === 1;
      });

  console.log(totalWords + ' words');
  console.log(totalLetters + ' letters');
  console.log(totalSymbols + ' symbols');
  console.log('Top three most common words: ' + sortedWords.slice(0, 3).join(', '));
  console.log('Top three most common letters: ' + sortedLetters.slice(0, 3).join(', '));
  console.log(sortedWordPara.slice(0, 1)[0] + ' is the most common first word of all paragraphs');
  console.log('Words only used once: ' + onceWords.join(', '));
  console.log('Letters not used in the document: ' + unusedLetters.join(', '));
});
