//very basic, likely bug prone singly linked list v1
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

	public static void main(String[] args) {
		LinkedList ll = new LinkedList();

		ll.appendToTail(1);
		ll.appendToTail(2);
		ll.appendToTail(3);
		ll.appendToTail(4);
		ll.appendToTail(5);
		ll.printList();
	}
}


