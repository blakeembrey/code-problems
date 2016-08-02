#!/usr/bin/env python

from math import factorial
import unittest


def perm_recursive(S):
    """
    Return a list with all permutations of the given list (or string).
    Uses the simple recursive solution. Do not handle repeated elements well.
    """

    def expand(c, L):
        return [L[0:i] + [c] + L[i:] for i in range(len(L) + 1)]

    if not isinstance(S, list):
        S = list(S)  # to handle strings

    if len(S) == 0:
        return []
    elif len(S) == 1:
        return [S]

    c, L = S[0], S[1:]

    res = []
    for newL in perm_recursive(L):
        res.extend(expand(c, newL))

    return res


def perm_generator(A):
    """
    Generates Permutations of elements in a list. Uses Non-recursive lexicographic order (Knuth's L-Algorithm).
    Requires all A elements are comparable to each other (list has to be sortable).
    The algorithm handles repeated elements gracefuly.
    Reference: https://en.wikipedia.org/wiki/Permutation#Permutations_in_computing
    """
    n = len(A)
    a = sorted(list(A))
    ok = False if n==0 else True

    while ok:
        yield a[:]
        # Find the largest index k such that a[k] < a[k + 1]
        k = -1
        for j in range(n-1, 0, -1):
            if a[j-1] < a[j]:
                k = j-1
                break
        else:  # if no such index, is last permutation
            break
        # Find the largest index l greater than k such that a[k] < a[l]
        l = -1
        for j in range(n-1, k, -1):
            if a[k] < a[j]:
                l = j
                break
        # Swap values
        a[k], a[l] = a[l], a[k]
        # Reverse the sequence from a[k + 1] up to and including the final element a[n]
        a[k+1:] = a[n-1:k:-1]


class Test(unittest.TestCase):

    def setUp(self):
        self.perm_ABC = (('A', 'B', 'C'), ('B', 'A', 'C'), ('B', 'C', 'A'), ('A', 'C', 'B'), ('C', 'A', 'B'),
                         ('C', 'B', 'A'))

    def test_recursive1(self):
        """ Permutations of list [A,B,C] correct """
        A = ['A', 'B', 'C']
        r = perm_recursive(A)
        self.assertEqual(set(tuple([tuple(l) for l in r])), set(self.perm_ABC))

    def test_recursive2(self):
        """ Permutations of str "ABC" correct """
        A = "ABC"
        r = perm_recursive(A)
        self.assertEqual(set(tuple([tuple(l) for l in r])), set(self.perm_ABC))

    def test_recursive3(self):
        """ Empty string produces empty list """
        A = ""
        r = perm_recursive(A)
        self.assertEqual(r, [])

    def test_recursive4(self):
        """ A sigle letter produces only one permutation """
        A = "A"
        r = perm_recursive(A)
        self.assertEqual(r, [['A']])

    def test_recursive5(self):
        """ Two repeated letter wrongly produce 2 permutations. Algorithm does not handle repeated elements! """
        A = "AA"
        r = perm_recursive(A)
        self.assertEqual(r, [['A', 'A'], ['A', 'A']])

    def test_generator1(self):
        """ Generated permutations of list [A,B,C] correct """
        A = ['A', 'B', 'C']
        r = list(perm_generator(A))
        self.assertEqual(set(tuple([tuple(l) for l in r])), set(self.perm_ABC))

    def test_generator2(self):
        """ Generated Permutations of str "ABC" correct """
        A = "BAC"
        r = list(perm_generator(A))
        self.assertEqual(set(tuple([tuple(l) for l in r])), set(self.perm_ABC))

    def test_generator3(self):
        """ Empty string generates nothing """
        A = ""
        r = list(perm_generator(A))
        self.assertEqual(r, [])

    def test_generator4(self):
        """ A sigle letter generates only one permutation """
        A = "A"
        r = list(perm_generator(A))
        self.assertEqual(r, [['A']])

    def test_generator5(self):
        """ Two repeated letters generate only one permutation. Algorithm handles repeated elements well. """
        A = "AA"
        r = list(perm_generator(A))
        self.assertEqual(r, [['A', 'A']])

if __name__ == '__main__':
    unittest.main()
