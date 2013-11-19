module.exports = function (string) {
  var result = {};

  // Using an immediately invoked named function for recursion.
  (function makeWord (word, remaining) {
    // If there are no more remaining characters, break and set to true
    // in the result object.
    if (!remaining) { return result[word] = true; }

    // Loop through all the remaining letters and recurse slicing the character
    // out of the remaining stack and into the solution word.
    for (var i = 0; i < remaining.length; i++) {
      makeWord(
        word + remaining[i],
        remaining.substr(0, i) + remaining.substr(i + 1)
      );
    }
  })('', string);

  // Using the ES5 Object.keys to grab the all the keys as an array.
  return Object.keys(result);
};
