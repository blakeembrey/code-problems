import unittest

def bubblesort(lst):
	for i in range(0, len(lst) - 1):
		for j in range(i + 1, len(lst)):
			if lst[i] > lst[j]:
                # swap values
				lst[i], lst[j] = lst[j], lst[i]
	return lst

class Test(unittest.TestCase):
    def testUnsortedSmall(self):
        self.assertEqual([1,2,3,4], bubblesort([4,3,2,1]))

    def testSortedSmall(self):
        self.assertEqual([1,2,3,4], bubblesort([1,2,3,4]))

    def testUnsortedLarge(self):
        self.assertEqual([1,2,3,4,5,6,7,8,9,10], bubblesort([6,3,4,8,7,9,5,10,1,2]))

    def testSortedLarge(self):
        self.assertEqual([1,2,3,4,5,6,7,8,9,10], bubblesort([1,2,3,4,5,6,7,8,9,10]))

    def testSingleInput(self):
        self.assertEqual([1], bubblesort([1]))

    def testBlankInput(self):
        self.assertEqual([], bubblesort([]))

if __name__ == '__main__':
    unittest.main()
