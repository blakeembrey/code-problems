// simple implementation of Queue with linked list
public class Queue {

	private Node first, last;


	private class Node{
		private Node next;
		private int data;

		Node(int data, Node next) {
			this.data = data;
			this.next = next;
		}
	}

	public void enqueue(int data) {
		Node n = new Node(data, null);
		if (first == null) {
			first = n;
			last = n;
			return;
		}

		last.next = n;
		last = n;
	}

	public int dequeue() throws Exception {
		if (first == null) {
			throw new Exception("Queue is empty, nothing to dequeue.");
		}
		int store = first.data;
		first = first.next;

		return store;
	}

	public void printQueue() {
		Node current = first;
		while (current != null) {
			System.out.println(current.data);
			current = current.next;
		}
	}
	public static void main(String[] args) throws Exception {
		Queue queue = new Queue();

		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);
		queue.enqueue(4);
		queue.enqueue(5);
		queue.enqueue(6);

		queue.printQueue();

		queue.dequeue();
		queue.dequeue();
		queue.dequeue();
		queue.dequeue();
		queue.printQueue();

	}
}