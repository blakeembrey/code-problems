function isPalindrome (str) {
  const mid = Math.floor(str.length / 2)

  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }

  return true
}

module.exports = function longestPalindrome (str) {
  let longest = ''

  for (let i = 0; i < str.length; i++) {
    let len = str.length

    while (len > i && len - i > longest.length) {
      const substring = str.substring(i, len--)

      if (isPalindrome(substring)) {
        longest = substring
      }
    }
  }

  return longest
}
