"""accepts a multi dimensional array and returns a flattened version"""

def flatten_array(orig):
    """returns a new, flattened, list"""

    flattened_list = []

    for item in orig:
        if isinstance(item, list):
            flattened_list += flatten_array(item)
        else:
            flattened_list.append(item)

    return flattened_list

def flatten_in_place(orig):
    """flattens a given list in place"""

    is_flattened = False

    while not is_flattened: # iterating until no more lists are found

        is_flattened = True
        for i, item in enumerate(orig):

            if isinstance(item, list):
                is_flattened = False
                orig = orig[:i] + item + orig[i + 1:]

    return orig
