def balanced_brackets(str)
  brackets = { '(' => ')', '{' => '}', '[' => ']' }

  arr = []
  str.each_char do |c|
    if brackets[c] then arr << c 
    else return false if arr.size < 1 || (brackets.key(c) != arr.pop) end
  end
  arr.empty?
end
