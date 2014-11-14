def array_pair_sum(sum, arr)
  result = []
  seen = Hash.new(false)
  while elem = arr.shift
    target = sum - elem
    (seen[elem] || seen[target]) ? next : (seen[elem] = true)
    result << [elem, target] if arr.include?(target)
  end
  result
end

alias :f :array_pair_sum

puts f(10, [3, 4, 5, 6, 7]).to_s # => [[3, 7], [4, 6]]
puts f(8, [3, 4, 5, 4, 4]).to_s  # => [[3, 5], [4, 4]]