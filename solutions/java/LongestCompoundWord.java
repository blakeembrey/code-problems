import java.util.ArrayList;
import java.util.HashMap;

public class LongestCompoundWord {
	HashMap<String, String> suffixTree = new HashMap<String, String>();
	ArrayList<String[]> queue = new ArrayList<String[]>();

	public static void main(String[] args) {
		LongestCompoundWord lcw = new LongestCompoundWord();
		String[] input = { "cat", "cats", "catsdogcats", "catxdogcatsrat",
				"dog", "dogcatsdog", "hippopotamuses", "rat", "ratcat",
				"ratcatdog", "ratcatdogcat" };
		System.out.println(lcw.getWord(input));
	}

	public String getWord(String[] input) {
		String LongestWord = "";
		// First round
		for (int i = 0; i < input.length; i++) {
			ArrayList<String[]> suffixes = getSuffixesForPrefixes(input[i],
					input[i]);
			if (suffixes.size() > 0) {
				// Add the pair of original word and suffix to the queue
				queue.addAll(suffixes);
			}
			suffixTree.put(input[i], input[i]);
		}

		// Empty the queue while searching for longest word
		while (!queue.isEmpty()) {
			String[] probePair = queue.get(0);
			// Find possible valid and compound words
			if (suffixTree.containsKey(probePair[1])) { // Valid word
				if (probePair[0].length() > LongestWord.length())
					LongestWord = probePair[0];
			} else {
				ArrayList<String[]> suffixes = getSuffixesForPrefixes(
						probePair[0], probePair[1]);
				if (suffixes.size() > 0) {
					// Add the pair of original word and suffix to the queue
					queue.addAll(suffixes);
				}
			}
			queue.remove(0);
		}
		return LongestWord;
	}

	public ArrayList<String[]> getSuffixesForPrefixes(String originalWord,
			String word) {
		ArrayList<String[]> suffixes = new ArrayList<String[]>();
		for (int i = 1; i <= word.length(); i++) {
			if (suffixTree.containsKey(word.substring(0, i))) {
				String[] pair = new String[2];
				pair[0] = originalWord;
				pair[1] = word.substring(i);
				suffixes.add(pair);
			}
		}
		return suffixes;
	}
}