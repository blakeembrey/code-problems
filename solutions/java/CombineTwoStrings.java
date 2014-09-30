import java.util.Stack;

/**
 * 
 * One possible solution is to concatenate first and second string, then find
 * all possible anagrams of that string, and finally check if the third string
 * is present in one of the anagrams. Works! But the problem is generating the
 * anagrams. Deteriorates the complexity.
 * 
 * Another solution is to compromise of the space complexity a little, and make
 * use of a stack as below.
 */
public class CombineTwoStrings {
	public static void main(String[] args) {
		CombineTwoStrings cts = new CombineTwoStrings();
		String one = "rohit";
		String two = "deepthi";
		String combined = "rodehepitht";
		System.out.print(cts.isValid(one, two, combined));
	}

	public boolean isValid(String one, String two, String combined) {
		Stack<Character> s = new Stack<Character>();
		if ((one.length() + two.length()) != combined.length())
			return false;
		for (int i = combined.length() - 1; i >= 0; i--) {
			s.push(combined.charAt(i));
		}
		int oneIndex = 0;
		int twoIndex = 0;
		while (!s.isEmpty() && oneIndex < one.length()
				&& twoIndex < two.length()) {
			char comparer = s.pop();
			if (comparer == one.charAt(oneIndex))
				oneIndex++;
			else if (comparer == two.charAt(twoIndex))
				twoIndex++;
			else
				return false;
		}
		return true;
	}
}