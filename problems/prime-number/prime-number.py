from math import sqrt

def is_prime(n):
    if n <= 1:
        return False
    elif n == 2:
        return True
    elif n % 2 == 0:
        return False
    for i in xrange(3, int(sqrt(n))+1, 2):
        if n % i == 0:
            return False
    return True
