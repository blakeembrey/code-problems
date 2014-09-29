import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;

public class EvenOccuringElement {
	public static void main(String[] args) {
		EvenOccuringElement eoe = new EvenOccuringElement();
		int[] input = { 1, 2, 3, 3, 3, 4, 4, 4, 5, 6 };
		Integer evenElement = eoe.getElement(input);
		if (evenElement != null)
			System.out.println(evenElement);
	}

	public Integer getElement(int[] input) {
		HashMap<Integer, Integer> counter = new HashMap<Integer, Integer>();
		for (int i = 0; i < input.length; i++) {
			if (counter.containsKey(input[i]))
				counter.put(input[i], counter.get(input[i]) + 1);
			else
				counter.put(input[i], 1);
		}
		Iterator<Entry<Integer, Integer>> it = counter.entrySet().iterator();
		while (it.hasNext()) {
			Map.Entry<Integer, Integer> pairs = (Entry<Integer, Integer>) it
					.next();
			if (((Integer) pairs.getValue() % 2) == 0)
				return (Integer) pairs.getKey();
		}
		return null;
	}
}