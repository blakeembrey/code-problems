# In given A, find three elements whose sum is closest to give value.
#author: Pankaj Kumar

import sys
def threeSumClosest(A, B):
    i , n = 0 , len(A)
    A = sorted(A)
    diff = sys.maxint
    close_sum = 0
    while i <= n-3:
        j , k = i+1 , n-1
        sum = A[i] + A[j] + A[k]
        if sum == B:
            return sum
        if diff > abs(sum - B):
            diff += abs(sum-B)
            close_sum = sum
        if sum < B:
            j += 1
        else:
            k -= 1
        i += 1
    return close_sum
print threeSumClosest([-1, 2, 1, -4], 1)
