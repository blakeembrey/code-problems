var combineTwoStrings = function (str1, str2, str3) {
  var pos1 = 0,
      pos2 = 0;

  if (str1 + str2 === str3) { return true; }

  for (var i = 0; i < str3.length; i++) {
    // If both the next characters match, we need to look ahead to the next
    // value and decide which path to take
    if (str3[i] === str1[pos1] && str3[i] === str2[pos2]) {
      if (str3[i + 1] === str1[pos1 + 1]) {
        pos1 += 1;
      } else {
        pos2 += 1;
      }
    } else if (str3[i] === str1[pos1]) {
      pos1 += 1;
    } else if (str3[i] === str2[pos2]) {
      pos2 += 1;
    } else {
      return false;
    }
  }

  return true;
};
