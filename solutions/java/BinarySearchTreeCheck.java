/*
public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode (int x){
        val = x;
    }
}
*/

/* Given a binary tree, check whether it’s a binary search tree or not. */

public class BinarySearchTreeCheck {

    public static boolean checkBST(TreeNode root){
        return checkBST(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }

    public static boolean checkBST(TreeNode curr, int min, int max){
        if (curr.left != null){
            if (curr.left.val < min || !checkBST(curr.left, min, curr.val))
                return false;
        }
        if (curr.right != null){
            if (curr.right.val > max || !checkBST(curr.right, curr.val, max))
                return false;
        }
        return true;
    }    
    
    public static void main(String[] args){
        /* Constructed binary tree is
             10
           /   \
         4      14
       /  \    /
     3     6  11
    /
   1
         */
        TreeNode root = new TreeNode(10);
        root.left = new TreeNode(4);
        root.right = new TreeNode(14);
        root.left.left = new TreeNode(3);
        root.left.right = new TreeNode(6);
        root.right.left = new TreeNode(11);
        root.left.left.left = new TreeNode(1);
        System.out.println(checkBST(root));
    }
}
