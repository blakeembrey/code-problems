process.stdin.resume();
process.stdin.setEncoding('utf8');

// Use an object to map the characters to their count
var characters     = {};
var words          = {};
var wordsParagraph = {};

var filterObject = function (input, callback) {
  var output = {};

  Object.keys(input).forEach(function (value) {
    callback(input[value], value, input) && (output[value] = input[value]);
  });

  return output;
};

var sortByCount = function (object) {
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

var isWordChar = function (char) {
  var charCode = char.charCodeAt(0);
  // Characters code not between A-Z
  return !(charCode < 65 || charCode > 90);
};

// On each input data chunk, process it using the balance checker
process.stdin.on('data', function (chunk) {
  var word       = '';
  var prevSymbol = '\n';

  for (var i = 0; i < chunk.length; i++) {
    var char = chunk[i].toUpperCase();

    // Increment the character count
    characters[char] = (characters[char] || 0) + 1;

    if (!isWordChar(char)) {
      if (word) {
        words[word] = (words[word] || 0) + 1;

        if (prevSymbol === '\n') {
          wordsParagraph[word] = (wordsParagraph[word] || 0) + 1;
        }
        word       = ''; // Reset the current word
      }
      prevSymbol = char;
    } else {
      word += char;
    }
  }
});

process.stdin.on('end', function () {
  var sortedWords = sortByCount(words);
  var alphabet    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  var sortedLetters = sortByCount(filterObject(characters, function (_, char) {
    return isWordChar(char);
  }));

  var sortedWordsParagraph = sortByCount(wordsParagraph);

  var totalWords = Object.keys(words).reduce(function (memo, word) {
    return memo + words[word];
  }, 0);

  var totalLetters = Object.keys(characters).reduce(function (memo, char) {
    return memo + (isWordChar(char) ? characters[char] : 0);
  }, 0);

  var totalSymbols = Object.keys(characters).reduce(function (memo, char) {
    return memo + (/[^\w\s]/.test(char) ? characters[char] : 0);
  }, 0);

  var unusedLetters = alphabet.filter(function (char) {
    return !characters[char];
  });

  var onceWords = Object.keys(words).filter(function (word) {
    return words[word] === 1;
  });

  console.log(totalWords + ' words');
  console.log(totalLetters + ' letters');
  console.log(totalSymbols + ' symbols');
  console.log(
    'Top three most common words: ' + sortedWords.slice(0, 3).join(', ')
  );
  console.log(
    'Top three most common letters: ' + sortedLetters.slice(0, 3).join(', ')
  );
  console.log(
    sortedWordsParagraph[0] + ' is the most common first word of all paragraphs'
  );
  console.log('Words only used once: ' + onceWords.join(', '));
  console.log('Letters not used in the document: ' + unusedLetters.join(', '));
});
