"""solution for the first-non-repeated-character problem"""

def first_non_repeated_character(str):
    """finds the first character in a string that's not repreated"""

    for i, char in enumerate(str):
        if i - 1 >= 0 and char == str[i - 1]:
            continue
        if i + 1 < len(str) and char == str[i + 1]:
            continue

        return char
