def quick_sort(array) # quick sort algorithm
  array.sort!
end

def self.sort!(array)
  process(array, 0, array.size - 1)
end

private

def self.process(array, left, right)
  if left < right
    pivot = partition(array, left, right)
    process(array, left, pivot - 1)
    process(array, pivot + 1, right)
  end
  array
end

def self.partition(array, left, right)
  x = array[right]
  i = left - 1
  (left..right - 1).each do |j|
    if array[j] <= x
      i += 1
      array[i], array[j] = array[j], array[i]
    end
  end
  array[i + 1], array[right] = array[right], array[i + 1]
  i + 1
end
