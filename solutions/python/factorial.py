"""solutions to the factorial problem"""

def factorial_iterative(num):
    """returns the factorial of num using an iterative method."""

    factor = 1

    for i in xrange(1, num + 1):
        factor *= i

    return factor

def factorial_reduce(num):
    """returns the factorial of num using a reduce (shortest method)."""

    return reduce(lambda x, y: x * y, range(1, num + 1))

def factorial_recursive(num):
    """returns the factorial of num using a recursive method."""

    if num == 1:
        return 1

    return num * factorial_recursive(num -1)
