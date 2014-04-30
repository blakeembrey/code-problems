import unittest
"""solution to the largest-continuous-sum problem"""

def largest_continuous_sum(arr):
    """returns the highest sum of a continuous sequence in a given list"""
    largest = sum = 0
    last = False
    for num in arr:
        if last and last + 1 == num:
            sum += num
        else:
            sum = num
        if largest < sum:
            largest = sum
        last = num
    return largest

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
