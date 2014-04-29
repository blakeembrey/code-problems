def insertion_sort(arr)
  1.upto(arr.length-1) do |i|
    j = i
    while j != 0 || arr[j] < arr[j-1]
      tmp = arr[j-1]
      arr[j-1] = arr[j]
      arr[j] = tmp
      j -= 1
    end
  end
  arr
end
