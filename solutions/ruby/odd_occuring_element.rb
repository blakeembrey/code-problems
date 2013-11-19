def odd_occuring_element(array)
  array.uniq.each do |num|
    return num if array.count(num) % 2 != 0
  end
end
