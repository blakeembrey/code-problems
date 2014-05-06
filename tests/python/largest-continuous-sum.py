import unittest

class LargestContinousSequenceTest(unittest.TestCase):
    def test_largest_continuous_sum(self):
        sum = largest_continuous_sum([1, 2, 3, 4])
        self.assertEqual(sum, 10)

        sum = largest_continuous_sum([1, 2, 3, 1, 2, 3, 4])
        self.assertEqual(sum, 10)

        sum = largest_continuous_sum([1, 2, 3, 2, 5, 4])
        self.assertEqual(sum, 6)

if __name__ == '__main__':
    unittest.main()