"""solution to the largest-continuous-sum problem"""

def largest_continuous_sum(arr):
    """returns the highest sum of a continuous sequence in a given list"""

    largest = 0
    queue = []
    for num in arr:
        if len(queue) > 0 and queue[-1] + 1 != num:
            sum = reduce(lambda x, y: x + y, queue)
            if largest < sum:
                largest = sum
            queue = []

        queue.append(num)

    return largest
