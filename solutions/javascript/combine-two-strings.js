module.exports = function combineTwoStrings (str1, str2, str3) {
  // Simple optimisation to break when impossible.
  if ((str1.length + str2.length) !== str3.length) {
    return false;
  }

  return isCombineTwoStrings(str1, str2, str3);
};

function isCombineTwoStrings (str1, str2, str3) {
  // No more solutions to find.
  if (str3.length === 0) {
    return true;
  }

  var newStr3 = str3.substr(1);

  // Path for when the first string matches.
  if (str1[0] === str3[0]) {
    // When both paths are possible, we implement a simple backtracking
    // mechanism for when the first was wrong. E.g. `aac`, `aab`, `aaacab`.
    if (str2[0] === str3[0]) {
      return isCombineTwoStrings(str1.substr(1), str2, newStr3) ||
        isCombineTwoStrings(str1, str2.substr(1), newStr3);
    }

    return isCombineTwoStrings(str1.substr(1), str2, newStr3);
  }

  // Path for when the second string matches.
  if (str2[0] === str3[0]) {
    return isCombineTwoStrings(str1, str2.substr(1), newStr3);
  }

  // When neither path is possible, the combination is `false`.
  return false;
}
