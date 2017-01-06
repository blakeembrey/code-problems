// Program to create a Binary Search Tree and implement level order traversal.
// Author: Viveka Aggarwal

import java.util.LinkedList;
import java.util.Queue;

public class TreeLevelOrderPrint {
	node root;
	class node {
		Integer value;
		node left;
		node right;
		
		node() {
		}
		
		node (Integer value) {
			this.value = value;
		}
	}
	
	public TreeLevelOrderPrint() {
		root = new node();
	}
	
	public treelevelorderprint(Integer value) {
		root = new node(value);
	}
	
	public void addToTree(Integer value) {
		if (root.value == null) {
			root = new node(value);
		} else {
			addToTree(value, root);
		}		
	}
	
	public void addToTree(Integer value, node curr) {
		if (value <= curr.value) {
			if (curr.left == null)
				curr.left = new node(value);
			else
				addToTree(value, curr.left);
		} else {
			if (curr.right == null)
				curr.right = new node(value);
			else
				addToTree(value, curr.right);
		}
	}
	
	public void levelOrder() {
		if (root == null || root.value == null) {
			System.out.println();
			System.out.println("Empty tree!!!");
			return;
		}
		
		Queue<node> q = new LinkedList<node>();
		q.add(root);
		
		while(!q.isEmpty()) {
			node curr = q.poll();
			System.out.print(curr.value + " ");
			
			if(curr.left != null)
				q.add(curr.left);
			
			if(curr.right != null)
				q.add(curr.right);
		}
	}
	
	public static void main(String[] args) {
		TreeLevelOrderPrint tree = new TreeLevelOrderPrint();
		for (int i = 0; i <= 10; i++) {
			tree.addToTree(i);
		}
		tree.addToTree(5);
		tree.levelOrder();
	}
}
