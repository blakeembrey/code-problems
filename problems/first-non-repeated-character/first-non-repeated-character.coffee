firstNonRepeatedCharacter = (string) ->
  checkChar = undefined
  prevCharacter = undefined
  checkChar = (->
    repeated = false
    (char) ->
      repeated = true  if prevCharacter and char is prevCharacter
      if prevCharacter and char isnt prevCharacter
        return true  unless repeated
        repeated = false
      prevCharacter = char
      
      # Return false to say it's not been repeated
      false
  )()
   
  # Interate one extra time past the last character
  i = 0

  while i <= string.length
    return prevCharacter  if checkChar(string[i])
    i++
