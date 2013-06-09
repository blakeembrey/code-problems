from __future__ import division
from math import ceil
from itertools import combinations
from operator import mul

# Sum of multiples of 3 or 5 under 1000, simplified:
# print (3 * 333 * 334 / 2) + (5 * 199 * 200 / 2) - (15 * 66 * 67 / 2)

def getSumOfMultiple(num, limit):
  return int((ceil(limit / num) - 1) * ceil(limit / num) * num / 2)

def getSumOfMultiples(multiples, limit):
  result = 0
  sign = 1
  for i in range(1, len(multiples) + 1):
    for x in combinations(multiples, i):
      result += sign * getSumOfMultiple(reduce(mul, x, 1), limit)
    sign *= -1
  return result
