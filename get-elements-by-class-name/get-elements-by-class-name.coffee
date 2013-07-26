getElementsByClassName = (element, className) ->
  found = []
  (traverseDom = (node) ->
    # Store the current node and current nodes class in a temporary variable
    currentNode = undefined
    currentClass = undefined
    
    # Loop through all the child nodes
    i = 0

    while i < node.childNodes.length
      currentNode = node.childNodes[i]
      currentClass = currentNode.className
      
      # Check if the class name exists within the current nodes class
      # I believe I learnt of this technique from jQuery source code
      found.push currentNode  if currentClass and ~(" " + currentClass + " ").indexOf(" " + className + " ")
      
      # If the current node have more child nodes, continue traversing
      currentNode.childNodes and traverseDom(currentNode)
      i++
  ) element
  found

getElementsByClassName = (element, className) ->
  # This function takes an easier approach, using a regular expression and
  # getting all elements straight up using the asterisk selector
  found = []
  regex = new RegExp("(^| )" + className + "($| )")
  elements = element.getElementsByTagName("*")
  
  # Loop through all the elements checking the class names against the
  # regular expression - when it suceeds just push it into the output array
  i = 0

  while i < elements.length
    found.push elements[i]  if regex.test(elements[i].className)
    i++
  found
