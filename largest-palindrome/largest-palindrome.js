module.exports = function (str) {
  var palindromes = [];

  var walkPalindrome = function (result, str, leftIndex, rightIndex) {
    while (str[leftIndex - 1] === str[rightIndex + 1]) {
      result = str[leftIndex -= 1] + result + str[rightIndex += 1];
    }
    palindromes.push(result);
  };

  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      walkPalindrome(str[i] + str[i - 1], str, i - 1, i);
    } else if (str[i] === str[i + 1]) {
      walkPalindrome(str[i] + str[i + 1], str, i, i + 1);
    } else if (str[i - 1] === str[i + 1]) {
      walkPalindrome(str[i - 1] + str[i] + str[i + 1], str, i - 1, i + 1);
    }
  }

  return palindromes.reduce(function (memo, str) {
    return str.length > memo.length ? str : memo;
  }, '');
};
