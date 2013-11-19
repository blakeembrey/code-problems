module.exports = function (string) {
  var length = 0;
  // Store the list of longest words in an object to automatically filter
  // for duplicates.
  var hash   = {};

  // Simplistic splitting on spaces, could improve to trim punctuation as well.
  string.split(' ').forEach(function (word) {
    // If the word's length is longer than the previous longest, we want to
    // update the length and reset the hash back to be empty.
    if (word.length > length) {
      length = word.length;
      hash   = {};
    }

    // If the word length is the same as the current longest length, add the
    // lowercase version to the hash. Here, we could store the value as some
    // arbitrary value since it doesn't matter - if though we needed to return
    // the instance of the word we could store how we found the word as the
    // value and grab it out when we return.
    if (word.length === length) {
      return hash[word.toLowerCase()] = true;
    }
  });

  // Return an array with all the words.
  return Object.keys(hash);
};
