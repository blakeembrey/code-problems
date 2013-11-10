class Node(object):
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def traverse_levelorder(root):
    if not root:
        return
    q = [root, True]  # Use True as sentinel for end of row
    while len(q) > 0:
        node = q.pop(0)
        print node.value,
        if node.left:
            q.append(node.left)
        if node.right:
            q.append(node.right)
        if q[0] is True:  # End of row
            q.pop(0)
            if len(q) > 0:
                q.append(True)
            print
