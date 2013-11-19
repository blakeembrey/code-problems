def word_position(text, word)
  text = text.split(" ")
  positions = []
  text.each_index do |i|
    positions << i if text[i] == word
  end
  return positions
end
