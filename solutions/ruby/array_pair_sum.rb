def array_pair_sum(total, nums)
  num_hash = nums.group_by { |i| i }
  num_hash.flat_map do |num, count|
    if 2 * num == total
      if count == 1 then Array.new
      else [[num], num] * (count.length * (count.length - 1) / 2) end
    elsif num_hash.key?(total - num) && num < total - num
        [[num, total - num]] * (num_hash[num].length * num_hash[total - num].length)
    else
      Array.new
    end
  end
end

# p array_pair_sum 10, [3, 4, 5, 6, 7]
# p array_pair_sum 8, [3, 4, 5, 4, 4]
