def anagram string, child
  count = 0

  reg = /\A(?!.*(.).*\1)[#{ child }]{#{ child.length }}\z/
  
  for i in 0...string.length
    count += 1 if string[i, child.length] =~ reg
  end
  count
end
