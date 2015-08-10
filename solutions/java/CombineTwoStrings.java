import java.util.HashMap;
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
 * 
 * Addition: We could also use a HashMap to record the rank of each character
 * in the combined string and check the two input strings as below.  
 */
public class CombineTwoStrings {
	public static void main(String[] args) {
		CombineTwoStrings cts = new CombineTwoStrings();
		String one = "rohit";
		String two = "deepthi";
		String three = "viveka";
		String combined = "rodehepitht";
		String combined2 = "rviovehkiat";
		System.out.println(cts.isValid(one, two, combined));
		System.out.println(cts.isValidTwo(one, three, combined2));

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
	
	// Used a hashMap to save the rank of each character in the combined string. 
	// Incrementing the pointer of respective string as per the rank in the 
	// combined string.
	public boolean isValidTwo(String one, String two, String combined) {
		if(one.length() + two.length() != combined.length())
			return false;
		HashMap<Integer, Character> map = new HashMap<>();
		int key = 0, p1 = 0, p2 = 0, pT = 0;
		for(Character i : combined.toCharArray()) {
			map.put(key++, i);
		}
		
		while(p1 <= one.length() - 1 && p2 <= two.length() - 1 && pT <= combined.length() - 1) {
			char temp = map.get(pT++);
			if(one.charAt(p1) == temp)
				p1++;
			else if (two.charAt(p2) == temp)
				p2++;
			else
				return false;
		}
		return true;
	}
}
