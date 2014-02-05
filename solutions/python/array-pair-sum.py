import unittest

"""solution to the array pair sum problem"""

def array_pair_sum_iterative(arr, k):
    """
    returns the array of pairs using an iterative method.
    complexity: O(n^2)
    """

    result = []

    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] + arr[j] == k:
                result.append([arr[i], arr[j]])

    return result


def array_pair_sum_sort(arr, k):
    """
    first sort the array and then use binary search to find pairs.
    complexity: O(nlogn)
    """

    result = []
    arr.sort()

    for i in range(len(arr)):
        if k - arr[i] in arr[i+1:]:
            result.append([arr[i], k - arr[i]])

    return result


def array_pair_sum_hash_table(arr, k):
    """
    Use a hash table to store array elements of pairs.
    complexity: O(n)
    """

    result = []
    hash_table = {}

    for e in arr:
        if e in hash_table:
            result.append([k - e, e])
        else:
            hash_table[k - e] = True
    result.reverse()

    return result


# Unit tests
class array_pair_sum_tests(unittest.TestCase):

    def setUp(self):
        self.arr1 = [3, 4, 5, 6, 7]
        self.arr2 = [3, 4, 5, 4, 4]
        self.result1 = [[3, 7], [4, 6]]
        self.result2 = [[3, 5], [4, 4], [4, 4], [4, 4]]

    def test_one(self):
        self.assertEqual(
            array_pair_sum_iterative(self.arr1, 10), self.result1)
        self.assertEqual(
            array_pair_sum_sort(self.arr1, 10), self.result1)
        self.assertEqual(
            array_pair_sum_hash_table(self.arr1, 10), self.result1)

    def test_two(self):
        self.assertEqual(
            array_pair_sum_iterative(self.arr2, 8), self.result2)
        self.assertEqual(
            array_pair_sum_sort(self.arr2, 8), self.result2)
        self.assertEqual(
            array_pair_sum_hash_table(self.arr2, 8), self.result2)


if __name__ == '__main__':
    unittest.main()
