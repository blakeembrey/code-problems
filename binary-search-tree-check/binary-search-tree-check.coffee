isBinarySearchTree = isBST = (bst) ->
  test = undefined
  
  # Break the recursion if the left or right node is bigger than the current
  # node or if the left node is larger than the right node
  return false  if bst.left and bst.left.value > bst.value
  return false  if bst.right and bst.right.value > bst.value
  return false  if bst.left and bst.right and bst.left.value > bst.right.value
  (if (test = bst.left and isBST(bst.left) and bst.right and isBST(bst.right)) is `undefined` then true else test)
