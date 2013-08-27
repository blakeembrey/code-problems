def selection_sort(array)
  0.upto(array.size - 1) do |i|
    min = i
    (i + 1).upto(array.size - 1) { |j| min = j if (array[j] <=> array[min]) == -1 }
    array[i], array[min] = array[min], array[i]
  end
  array
end
