module.exports = (text) ->
  trie = {}
  pos = 0
  active = trie # Start the active structure as the root trie structure
  
  # Suffix a space after the text to make life easier
  text += " "
  
  # Loop through the input text adding it to the trie structure
  i = 0

  while i < text.length
    
    # When the character is a space, restart
    if text[i] is " "
    
      # If the current active doesn't equal the root, set the position
      (active.positions = active.positions or []).push pos  if active isnt trie
      
      # Reset the positions and the active part of the data structure
      pos = i
      active = trie
      continue
    
    # Set the next character in the structure up
    active[text[i]] = (active[text[i]] or {})
    active = active[text[i]]
    i++
  
  # Return a function that accepts a word and looks it up in the trie structure
  (word) ->
    i = -1
    active = trie
    while word[++i]
      return []  unless active[word[i]]
      active = active[word[i]]
    active.positions
