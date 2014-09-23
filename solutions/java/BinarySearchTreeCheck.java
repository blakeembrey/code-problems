/* Uses Inorder traversal. Only works on unique element BT */
public class BinarySearchTreeCheck {
	Node root;

	public BinarySearchTreeCheck() {
		root = null;
	}

	public class Node {
		int value;
		Node left;
		Node right;

		public Node(int value) {
			this.value = value;
			this.left = null;
			this.right = null;
		}

		public void setLeft(Node left) {
			this.left = left;
		}

		public Node getLeft() {
			return left;
		}

		public void setRight(Node right) {
			this.right = right;
		}

		public Node getRight() {
			return right;
		}

		public int getValue() {
			return value;
		}
	}

	public void createBinaryTree(int option) {
		root = new Node(10);
		Node one = new Node(8);
		Node two = new Node(5);
		Node three = new Node(9);
		Node four = new Node(15);
		switch (option) {
		case 1: /* Is BST (Only unique elements) */
			root.setLeft(one);
			root.setRight(four);
			one.setLeft(two);
			one.setRight(three);
			break;
		case 2: /* Not BST (Only unique elements) */
			root.setRight(two);
			root.setLeft(one);
			one.setLeft(four);
			one.setRight(three);
			break;
		default:
			break;
		}
	}

	public boolean isBSTBetter() {
		if (root == null)
			return true;
		return isBSTBetter(root);
	}

	private Integer prev = null;

	public boolean isBSTBetter(Node cur) {
		if (cur == null)
			return true;

		// Check for the left subtree
		if (!isBSTBetter(cur.getLeft())) {
			return false;
		}

		// Check the cur value and update prev
		if (prev != null && cur.getValue() <= prev)
			return false;
		prev = cur.getValue();

		// Check for the right subtree
		if (!isBSTBetter(cur.getRight())) {
			return false;
		}

		return true;
	}

	public static void main(String[] args) {
		BinarySearchTreeCheck btOne = new BinarySearchTreeCheck();
		btOne.createBinaryTree(1);
		BinarySearchTreeCheck btTwo = new BinarySearchTreeCheck();
		btTwo.createBinaryTree(2);

		// Only works if all the elements in the Binary Tree are unique.
		System.out.println(btOne.isBSTBetter());
		System.out.println(btTwo.isBSTBetter());
	}
}