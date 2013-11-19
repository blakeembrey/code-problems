largestPalindrome = (str) ->
  palindromes = []
  walkPalindrome = (result, str, leftIndex, rightIndex) ->
    result = str[leftIndex -= 1] + result + str[rightIndex += 1]  while str[leftIndex - 1] is str[rightIndex + 1]
    palindromes.push result
  i = 0

  while i < str.length
    if str[i] is str[i - 1]
      walkPalindrome str[i] + str[i - 1], str, i - 1, i
    else if str[i] is str[i + 1]
      walkPalindrome str[i] + str[i + 1], str, i, i + 1
    else walkPalindrome str[i - 1] + str[i] + str[i + 1], str, i - 1, i + 1  if str[i - 1] is str[i + 1]
    i++
  palindromes.reduce ((memo, str) -> (if str.length > memo.length then str else memo)), ""
