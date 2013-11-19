integerLength = (num) ->
  # There is an extra check here to ensure the number is an integer
  ("" + (num | 0)).length
