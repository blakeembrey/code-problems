LinkedList = (value) ->
  @value = value
  @prev = this
  @next = this

LinkedList::appendNode = (value) ->
  node = new LinkedList(value)
  node.prev = this
  node.next = @next
  
  # Fix the linked list references
  @next = @next.prev = node
  node

LinkedList::prependNode = (value) ->
  node = new LinkedList(value)
  node.prev = @prev
  node.next = this
  
  # Fix the linked list references
  @prev = @prev.next = node
  node

LinkedList::removeNode = ->
  # Create a reference around the node to be removed
  @prev.next = @next
  @next.prev = @prev
  
  # Remove existing references to the current list
  @next = @prev = this
  this

LinkedList::containsNode = (value) ->
  return true  if @value is value
  node = @next
  
  # Loop through the connections until we hit ourselves again
  while node isnt this
    return true  if node.value is value
    node = node.next
  false
