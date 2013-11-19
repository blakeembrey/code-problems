module.exports = function (list) {
  var prefixes      = {};
  var possibleWords = [];
  var longestWords  = [];
  var longestLength = 0;

  // Inserts a word into the prefix tree structure.
  var insertWord = function (word) {
    var index  = 0;
    var active = prefixes;
    var char;

    while (char = word[index++]) {
      active = (active[char] = active[char] || {});
    }

    active.word = true;
  };

  // Finds the longest prefix we can make using the word.
  var findPrefixes = function (word) {
    var prefix = '';
    var found  = [];
    var index  = 0;
    var active = prefixes;
    var char;

    while (char = word[index++]) {
      if (!active[char]) { break; }
      // Move to the next character and add to the prefix.
      active = active[char];
      prefix += char;
      // If this index is a word, set it found to true.
      active.word && found.push(prefix);
    }

    return found;
  };

  // Loop through each of words in the list, adding them to the prefixes tree
  list.forEach(function (word) {
    var prefix;

    // If we can find a closest possible word, it may be possible to create a
    // compound word - but we won't be able to check until we reach the end.
    if ((prefix = findPrefixes(word)) && prefix.length) {
      possibleWords.push([ word, prefix ]);
    }

    // Insert the word into the prefix tree.
    insertWord(word);
  });

  possibleWords.forEach(function (possible) {
    var word     = possible[0];
    var prefixes = possible[1];
    var found    = false;

    var findCompoundWord = function (suffix) {
      // Find all future prefixes and continue search.
      if (suffix) {
        return findPrefixes(suffix).forEach(function (prefix) {
          !found && loopPrefixes(prefix, suffix);
        });
      }

      // If the suffix doesn't exist, it must be because we have found an
      // exact compound word.
      if (word.length > longestLength) {
        longestWords  = [];
        longestLength = word.length;
      }

      // If the word is equal to the length of the current longest word, push it
      // into the result array, then set found to be true so we can break the
      // other recursions.
      if (word.length === longestLength) {
        found = true;
        longestWords.push(word);
      }
    };

    var loopPrefixes = function (prefix, word) {
      findCompoundWord(word.substr(prefix.length));
    };

    prefixes.forEach(function (prefix) {
      loopPrefixes(prefix, word);
    });
  });

  return longestWords;
};
