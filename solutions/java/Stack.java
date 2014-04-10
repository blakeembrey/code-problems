// Stack that takes an int
public class Stack {
	private Node top;

	private class Node {
		private Node next;
		private int data;
		Node(int data, Node next) {
			this.data = data;
			this.next = next;
		}
	}

	public void push(int data) {
		if (top == null) {
			Node n = new Node(data, null);
			top = n;
		} else {
			Node n = new Node(data, top);
			top = n;
		}
	}

	public int pop() throws Exception {
		if (top == null) {
			throw new Exception("nothing in stack to pop");
		}
		int dat = top.data;
		top = top.next;
		return dat;
	}

	public void printStack(){
		Node current = top;
		while (current != null) {
			System.out.println(current.data);
			current = current.next;
		}

	}

	//Test Client
	public static void main(String[] args) throws Exception{
		Stack stack = new Stack();
		stack.push(1);
		stack.push(2);
		stack.push(3);
		stack.push(4);
		stack.push(5);
		

		stack.printStack();
		System.out.println("popped this out: " + stack.pop());
		System.out.println("popped this out: " + stack.pop());
		stack.printStack();
	}
}