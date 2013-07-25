def bubble_sort(array)
  i = 0
  while i < array.size - 1
    j = i + 1
    while j < array.size
      array[i], array[j] = array[j], array[i] if array[i] > array[j]
      j = j + 1
    end
    i = i + 1
  end
  array
end
