/*
 * Program to create a binary search tree.
 * Author: Viveka Aggarwal
 */

public class BinarySearchTree {
	Node root;
	public class Node {
		Node left;
		Node right;
		Integer data;
		
		Node() {
		}
		
		Node(Integer data) {
			left = right = null;
			this.data = data;
		}
	}
	
	BinarySearchTree() {
		root = new Node();
	}
	
	BinarySearchTree(Integer data) {
		root = new Node(data);
	}
	
	public void addToTree(Integer data) {
		addToTree(root, data);
	}
	
	private void addToTree(Node curr, Integer data) {
		if(curr == null) {
			curr = new Node(data);
		} else if(curr.data.compareTo(data) >= 0) {
			if(curr.left == null)
				curr.left = new Node(data);
			else
				addToTree(curr.left, data);
		} else {
			if(curr.right == null)
				curr.right = new Node(data);
			else
				addToTree(curr.right, data);
		}
	}
	
	@Override
	public String toString() {
		return toString(this.root);
	}
	
	String toString(Node curr) {
		if(curr == null)
			return "";
		return toString(curr.left) + " " + curr.data + " " + toString(curr.right);
	}
	
	public static void main(String[] args) {
		BinarySearchTree tree = new BinarySearchTree(1);
		tree.addToTree(5);
		tree.addToTree(3);
		tree.addToTree(89);
		tree.addToTree(43);
		tree.addToTree(43);
		tree.addToTree(67);
		
		System.out.println(tree.toString());
	}
}
