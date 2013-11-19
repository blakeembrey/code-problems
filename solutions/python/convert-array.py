"""solution to the convert array problem"""

def f(arr):
    """sorts the array by numbers in place using constant extra space"""

    position = 0
    for i in xrange(len(arr) / 3):
        gap = (len(arr) - position) / 3
        arr.insert(position + 1, arr.pop(position + gap * 1))
        arr.insert(position + 2, arr.pop(position + gap * 2))
        position += 3

    return arr
