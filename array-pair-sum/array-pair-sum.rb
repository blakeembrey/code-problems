def arrayPairSum number, array

  pairs = []
  
  array.each do |a|
      pairs.push([a, a]) if number - a == a && array.count(a) > 1 && !pairs.include?([a, a]) 
      pairs.push([a, number - a]) if number - a != a && array.include?(number - a) && !pairs.include?([number - a, a])
  end
  
  pairs
end
