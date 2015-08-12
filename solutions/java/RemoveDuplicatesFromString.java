// Program to remove duplicates from a given string
// 1. getUniqueString(String) method uses a boolean array.
// 2. removeDuplicates(String) method uses a hash map.
// Both the methods have O(n) space and time complexity. (n being the string length)

import java.util.HashMap;

public class RemoveDuplicatesFromString {
	public static void main(String[] args) {
		RemoveDuplicatesFromString rsd = new RemoveDuplicatesFromString();
		String input = "Tree Traversal";
		System.out.println("Method 1: " +rsd.getUniqueString(input));
		System.out.println("Method 2: " +rsd.removeDuplicates(input));
	}

	public String getUniqueString(String input) {
		boolean[] isUsed = new boolean[256];
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < input.length(); i++) {
			int position = input.charAt(i);
			if (!isUsed[position]) {
				sb.append(input.charAt(i));
				isUsed[position] = true;
			}
		}
		return sb.toString();
	}
	
	public String removeDuplicates(String input) {
		HashMap<Character, Integer> map = new HashMap<>();
		StringBuffer sb = new StringBuffer("");
		for (int i = 0; i < input.length(); i++) {
			char c = input.charAt(i);
			if (!map.containsKey(c)) {
				sb.append(c);
				map.put(c, 1);
			}
		}
		return sb.toString();
	}
}
