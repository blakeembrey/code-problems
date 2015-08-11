/* checks if a given tree is a BST
 1. isBSTBetter checks for a BST with unique elements
 2. isBST checks for a BST with unique or non Unique elements
 */

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
        Node five = new Node(8);
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
            case 3: /* Is BST (Non-unique elements) */
                root.setLeft(one);
                root.setRight(four);
                one.setLeft(five);
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
    
    // Checks for tree with non unique elements by comparing the
    // minimum and maximum values.
    // Author: Viveka Aggarwal
    public boolean isBST() {
        return isBST(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }
    
    public static boolean isBST(Node n, int min, int max) {
        if(n == null)
            return true;
        
        if(n.getValue() <= min || n.getValue() > max)
            return false;
        
        if(!isBST(n.left, min, n.getValue()) || !isBST(n.right, n.getValue(), max))
            return false;
        
        return true;
    }
    
    
    public static void main(String[] args) {
        BinarySearchTreeCheck btOne = new BinarySearchTreeCheck();
        btOne.createBinaryTree(1);
        BinarySearchTreeCheck btTwo = new BinarySearchTreeCheck();
        btTwo.createBinaryTree(2);
        BinarySearchTreeCheck btThree = new BinarySearchTreeCheck();
        btThree.createBinaryTree(3);
        
        // Only works if all the elements in the Binary Tree are unique.
        System.out.println(btOne.isBSTBetter());
        System.out.println(btTwo.isBSTBetter());
        
        // Works with both unique and non unique elements in a tree.
        System.out.println(btOne.isBST());
        System.out.println(btTwo.isBST());
        System.out.println(btThree.isBST());
    }
}