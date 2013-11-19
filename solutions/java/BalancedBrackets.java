import java.util.ArrayList;
import java.util.HashMap;
import java.util.Stack;


public class BalancedBrackets {
		
	public boolean isBalanced(String s) {
		HashMap<Character, Character> bracketMap = new HashMap<Character, Character>();
		bracketMap.put('{', '}');
		bracketMap.put('[', ']');
		bracketMap.put('(', ')');
		Stack<Character> bracketStack = new Stack<Character>();
		for (char c: s.toCharArray()) {
			if (!bracketStack.isEmpty() && bracketMap.get(bracketStack.peek()) == c) {
				bracketStack.pop();
			} else if (bracketMap.containsKey(c)) {
				bracketStack.push(c);
			} else {
				return false;
			}
		}
		return bracketStack.isEmpty();
	}
	
	public static void main(String[] args) {
		BalancedBrackets b = new BalancedBrackets();
		System.out.println(b.isBalanced("()[]{}(([])){[()][]}"));
		System.out.println(b.isBalanced("())[]{}"));
		System.out.println(b.isBalanced("[(])"));
	}
}
