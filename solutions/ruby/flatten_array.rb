# Note that there is already an implementation in the core ruby library
# http://ruby-doc.org/core-2.2.0/Array.html#method-i-flatten

def flatten_array(arr = [])
  return arr unless arr.is_a? Array

  result = []
  arr.each do |elem|
    if elem.is_a? Array
      result += flatten_array(elem)
    else
      result << elem
    end
  end

  result
end

flatten_array([]) # => []
flatten_array([[["a"]]]) # => ["a"]
flatten_array([0, ["damn"], [[["a", "b"]]], 0]) # => [0, "damn", "a", "b", 0]
