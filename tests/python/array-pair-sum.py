import unittest

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