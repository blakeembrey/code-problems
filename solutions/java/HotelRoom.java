import java.util.ArrayList;

public class HotelRoom {
	public static void main(String[] args) {
		HotelRoom hr = new HotelRoom();
		Integer found = hr.getRoomNumber(100);
		if (found != null)
			System.out.print(found);
	}

	public Integer getRoomNumber(int n) {
		for (int i = 2; i <= n; i = i + 2) {
			// We know off the bat that its not a prime number, nor an odd number.
			ArrayList<Integer> factors = new ArrayList<Integer>();
			int index = 1;
			int factorSum = 0;
			while (index <= i / 2) {
				// If i is a factor
				if (i % index == 0) {
					factorSum += index;
					factors.add(index);
				}
				index++;
			}
			// We have the sum of factors here. Check if its greater than the
			// number itself.
			if (factorSum > i) {
				// Find sums of all the subsets of the factors
				Integer foundNumber = checkSubsetSum(factors, i);
				if (foundNumber != null)
					return foundNumber;
				else
					continue;
			} else {
				continue;
			}
		}
		return null;
	}

	public Integer checkSubsetSum(ArrayList<Integer> factors, int n) {
		ArrayList<ArrayList<Integer>> result = new ArrayList<ArrayList<Integer>>();
		for (Integer i : factors) {
			ArrayList<ArrayList<Integer>> temp = new ArrayList<ArrayList<Integer>>();
			// Get all the elements already in the result
			for (ArrayList<Integer> a : result)
				temp.add(new ArrayList<Integer>(a));

			// Add i to each of these subsets
			for (ArrayList<Integer> a : temp)
				a.add(i);

			// Add i by itself
			ArrayList<Integer> single = new ArrayList<Integer>();
			single.add(i);
			temp.add(single);
			result.addAll(temp);
		}

		boolean matched = true;
		for (ArrayList<Integer> al : result) {
			int sum = 0;
			for (Integer i : al)
				sum += i;
			if (sum == n)
				matched = false;
		}
		if (matched)
			return n;
		return null;
	}
}