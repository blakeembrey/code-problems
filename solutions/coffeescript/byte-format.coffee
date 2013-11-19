module.exports = (bytes, precision) ->
  suffixes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
  factor = Math.pow(10, (if precision > 0 then precision else 2))
  
  # Using a for loop since it's perfect for this kind of problem
  i = bytes
  k = 0

  while i >= 1024 and k < suffixes.length
    i /= 1024
    k++
  
  # Return the number rounded to precision
  (Math.round(i * factor) / factor) + " " + suffixes[k]
