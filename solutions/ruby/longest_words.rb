def longest_words string
  # splitting the string into words and removing duplicates from the array
  words = string.downcase.split.uniq
  # finding the maximum value in the array based on length
  max = words.max_by { |word| word.length }
  # selecting all the words with the same length as the max value
  words = words.select { |word| word.length == max.length }
end