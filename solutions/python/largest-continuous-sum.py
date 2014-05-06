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
