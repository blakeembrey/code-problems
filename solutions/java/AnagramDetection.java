import java.util.HashMap;
import java.util.Map;


public class AnagramDetection {
	
	private Map<Character, Integer> charToPrimeMap;
	
	public AnagramDetection() {
		charToPrimeMap = new HashMap<Character, Integer>();
		populateCharToPrimeMap();
	}
	
	private boolean isPrime(int n) {
		for (int i = 2; i < Math.ceil(Math.sqrt(n)); ++i) {
			if (n % i == 0) {
				return false;
			}
		}
		return true;
	}
	
	private int getNthPrime(int n) {
		int nthPrime = 2;
		while(n > 0) {
			if (isPrime(nthPrime)) {
				--n;
			}
			++nthPrime;
		}
		return nthPrime;
	}
	
	private void populateCharToPrimeMap() {
		for (int i = 0; i < 52; i += 2) {
			charToPrimeMap.put((char)('a'+i/2), getNthPrime(i/2));
			charToPrimeMap.put(Character.toUpperCase((char)('a'+i/2)), getNthPrime(i/2+1));
		}
	}
	
	private int hashString(String input) {
		int hash = 1;
		for (char c: input.toCharArray()) {
			hash *= charToPrimeMap.get(c);
		}
		return hash;
	}
	
	public int detectAnagrams(String original, String anagram) {
		char[] originalChars = original.toCharArray();
		int anagramCount = 0;
		for (int i = 0; i < original.length() - anagram.length(); ++i) {
			String currentSubstring = String.copyValueOf(originalChars, i, anagram.length());
			if (hashString(currentSubstring) == hashString(anagram)) {
				++anagramCount;
			}
		}
		return anagramCount;
	}
	
	public static void main(String[] args) {
		AnagramDetection a = new AnagramDetection();
		System.out.println(a.detectAnagrams("AdnBndAndBdaBn", "dAn"));
		System.out.println(a.detectAnagrams("AbrAcadAbRa", "cAda"));
	}
	

}
