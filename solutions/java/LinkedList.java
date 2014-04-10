//basic, singly linked list v1
import java.util.*;


public class LinkedList {
	private Node first;

	private class Node {
		Node next = null;
		int data;

		Node(int data, Node next) {
			this.data = data;
			this.next = next;
		}
	}
	public void appendToTail(int data) {
		Node end = new Node(data, null);
		if (first == null) {
			first = end;
			return;
		}
		Node current = first;
		while (current.next != null) {
			current = current.next;
		}
		current.next = end;
	}

	public void removeDuplicates() {
		Hashtable<Integer, Boolean> ht = new Hashtable<Integer, Boolean>();

		if (first == null || first.next == null) {return;}
		Node current = first;
		Node prev = null;
		while (current != null) {
			if (ht.containsKey(current.data)) {
				prev.next = current.next;
			} else {
				ht.put(current.data, true);
				prev = current;
			}
			current = current.next;
		}
	}

	public int findKtoLastElement(int k) {
		Node current = first;
		Node runner = current;
		for(int i = 0; i < k; i++) {
			if (runner.next == null) {
				return runner.data;
			}
			runner = runner.next;
		}
		while (runner != null) {
			runner = runner.next;
			current = current.next;
		}
		return current.data;
	}

	public void printList() {
		Node current = first;
		if (first == null) {
			System.out.println("null");
			return;
		}
		StringBuffer sb = new StringBuffer();
		sb.append(first.data);
		while (current.next != null) {
			sb.append(" -> ");
			sb.append(current.next.data);
			current = current.next;
		}
		sb.append(" -> ");
		sb.append("null");
		System.out.println(sb.toString());
	}

	// Test Client
	public static void main(String[] args) {
		LinkedList ll = new LinkedList();

		ll.appendToTail(1);
		ll.appendToTail(2);
		ll.appendToTail(3);
		ll.appendToTail(4);
		ll.appendToTail(5);	

		ll.appendToTail(5);
		ll.appendToTail(5);
		ll.appendToTail(5);
		ll.appendToTail(5);


		ll.printList();

		ll.removeDuplicates();
		ll.printList();

		System.out.println("the 3 rd to last element is " + ll.findKtoLastElement(3));
	}
}


