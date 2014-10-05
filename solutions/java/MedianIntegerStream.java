public class MedianIntegerStream {

	/**
	 * This solution is a replica of the one suggested in javascript solutions
	 * for MedianIntegerStream, and I think its one of the best possible solutions.
	 */

	MyLinkedList ll;

	public MedianIntegerStream() {
		// TODO Auto-generated constructor stub
		ll = new MyLinkedList();
	}

	public static void main(String[] args) {
		MedianIntegerStream mis = new MedianIntegerStream();
		System.out.println("Median: " + mis.ll.insertIntoLL(10));
		System.out.println("Median: " + mis.ll.insertIntoLL(15));
		System.out.println("Median: " + mis.ll.insertIntoLL(25));
		System.out.println("Median: " + mis.ll.insertIntoLL(5));
	}

	public class MyLinkedList {
		Node median;
		int leftNodes;
		int rightNodes;

		public MyLinkedList() {
			median = null;
			leftNodes = 0;
			rightNodes = 0;
		}

		public MyLinkedList(Node median) {
			this.median = median;
			leftNodes = 0;
			rightNodes = 0;
		}

		public class Node {
			Integer value;
			Node left;
			Node right;

			Node() {
				value = null;
				left = null;
				right = null;
			}

			Node(int value) {
				this.value = value;
				left = null;
				right = null;
			}

			Node(int value, Node left, Node right) {
				this.value = value;
				this.left = left;
				this.right = right;
			}
		}

		public void prepend(int value) {
			Node cur = median;
			while (cur.left != null && cur.left.value > value)
				cur = cur.left;
			Node newNode = new Node(value, cur.left, cur);
			if (cur.left != null)
				cur.left.right = newNode;
			cur.left = newNode;
			leftNodes++;
			updateMedian();
		}

		public void append(int value) {
			Node cur = median;
			while (cur.right != null && cur.right.value < value)
				cur = cur.right;
			Node newNode = new Node(value, cur, cur.right);
			if (cur.right != null)
				cur.right.left = newNode;
			cur.right = newNode;
			rightNodes++;
			updateMedian();
		}

		public void updateMedian() {
			if (this.leftNodes - this.rightNodes > 1) {
				median = median.left;
				rightNodes++;
				leftNodes--;
			} else if (this.rightNodes - this.leftNodes > 1) {
				median = median.right;
				leftNodes++;
				rightNodes--;
			}
		}

		public int insertIntoLL(int value) {
			if (median == null) {
				median = new Node(value);
			} else {
				if (value <= median.value)
					prepend(value);
				else
					append(value);
			}
			if (this.leftNodes == this.rightNodes)
				return median.value;
			else if (leftNodes < rightNodes)
				return (median.value + median.right.value) / 2;
			else
				return (median.value + median.left.value) / 2;
		}
	}
}