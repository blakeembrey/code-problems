findRoom = (totalRooms) ->
  findDivisors = (number) ->
    divisors = []
    iterator = number
    divisors.push iterator  if number % iterator is 0  while iterator--
    divisors
  
  # Returns true or false based on whether the number is found in the sum of array subsets
  isSubsetSum = (number, array) ->
    hasSubset = false
    (findSubset = (total, numbers) ->
      not hasSubset and (hasSubset = total is number)
      return  if hasSubset or total > number
      numbers.forEach (num, index) ->
        findSubset total + num, numbers.slice(0, index).concat(numbers.slice(index + 1))
    ) 0, array
    hasSubset
  
  # Need a simple helper method that returns the sum of an array
  sumArray = (array) ->
    array.reduce ((memo, num) ->
      memo + num
    ), 0
  
  # Find the room using the provided functions
  divisors = undefined
  room = 0

  while room <= totalRooms
    divisors = findDivisors(room)
    
    # The sum of all the divisors must be greater than the number
    return room  if sumArray(divisors) > room and not isSubsetSum(room, divisors)
    room++
  0 # No room number found
