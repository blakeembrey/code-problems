"""finds the missing element in the shuffled list"""

def difference_set(orig, shuffled):
    """finds the missing element using a set."""

    return set(orig).difference(set(shuffled)).pop()

def difference_iterative(orig, shuffled):
    """finds the missing element by iterating over the list"""

    for x in orig:
        if not x in shuffled:
            return x
