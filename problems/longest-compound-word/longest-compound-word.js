module.exports = function (list) {
  var prefixes      = {},
      possibleWords = [],
      longestWords  = [],
      longestLength = 0,
      insertWord, findPrefixes;

  // Inserts a word into the prefix tree structure
  insertWord = function (word) {
    var index  = 0,
      active = prefixes,
      char;

    while (char = word[index++]) {
      active = (active[char] = active[char] || {});
    }

    active.word = true;
  };

  // Finds the longest prefix we can make using the word
  findPrefixes = function (word) {
    var prefix = '',
        found  = [],
        index  = 0,
        active = prefixes,
        char;

    while (char = word[index++]) {
      if (!active[char]) { break; }
      // Move to the next character and add to the prefix
      active = active[char];
      prefix += char;
      // If this index is a word, set it found to true
      active.word && found.push(prefix);
    }

    return found;
  };

  // Loop through each of words in the list, adding them to the prefixes tree
  list.forEach(function (word) {
    var prefix;
    // If we can find a closest possible word, it may be possible to create a
    // compound word - but we won't be able to check until we reach the end
    if ((prefix = findPrefixes(word)) && prefix.length) {
      possibleWords.push([ word, prefix ]);
    }
    // Insert the word into the prefix tree
    insertWord(word);
  });

  possibleWords.forEach(function (possible) {
    var word     = possible[0],
        prefixes = possible[1],
        found    = false,
        findCompoundWord, loopPrefixes;

    findCompoundWord = function (suffix) {
      // Find all future prefixes and continue search
      if (suffix) {
        return findPrefixes(suffix).forEach(function (prefix) {
          !found && loopPrefixes(prefix, suffix);
        });
      }
      // If the suffix doesn't exist, it must be because we have found an
      // exact compound word
      if (word.length > longestLength) {
        longestWords  = [];
        longestLength = word.length;
      }
      // If the word is equal to the length of the current longest word, push it
      // into the result array, then set found to be true so we can break the
      // other recursions
      word.length === longestLength && longestWords.push(word) && (found = true);
    };

    loopPrefixes = function (prefix, word) {
      findCompoundWord(word.substr(prefix.length));
    };

    prefixes.forEach(function (prefix) {
      loopPrefixes(prefix, word);
    });
  });

  return longestWords;
};
