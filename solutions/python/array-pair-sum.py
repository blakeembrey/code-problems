"""solution to the array pair sum problem"""

def pair_sum_arrays(k, arr):
    """returns the array of pairs using an iterative method."""

    result = []

    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] + arr[j] == k:
                result.append([arr[i], arr[j]])

    return result
