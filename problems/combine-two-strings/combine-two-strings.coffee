combineTwoStrings = (str1, str2, combined) ->
  # Generate all the posible paths between `str1` and `str2`
  paths = {}
  
  # Check the string lengths are the same to begin
  return false  if (str1 + str2).length isnt combined.length
  
  # Finding paths is essentially the anagrams solution
  (findPath = (str1, str2, path) ->
    return paths[path] = true  if path.length is combined.length
    
    # Find the next path from the first character of either strings
    str1 and findPath(str1.substr(1), str2, path + str1.substr(0, 1))
    str2 and findPath(str1, str2.substr(1), path + str2.substr(0, 1))
  ) str1, str2, ""
  combined of paths
