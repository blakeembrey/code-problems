def bubble_sort array
  i = 0
  while i < array.size-1
    j = i+1
    while j < array.size
      if array[i] > array[j]
        array[i] , array[j] = array[j] , array[i]
      end
      j = j + 1
    end
    i = i + 1
  end
  array
end