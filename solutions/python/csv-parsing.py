#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""solution to the csv parsing problem, handling quotes and numric values"""

def convert_to_number(value):
    """converts the passed over string to a number, if possible"""

    try:
        return int(value)
    except ValueError:
        pass

    return value

def csv_parsing(csv):
    """returns list of string/numeric csv values"""

    count = 0
    values = []
    pos = 0
    while pos < len(csv):
        if csv[pos] == ',': # skip comma from previous iteration
            pos += 1

        values.insert(count, '')
        while pos < len(csv) and csv[pos] != ',':
            if csv[pos] == '"' or csv[pos] == "'": # handle quoted strings
                first_quote = pos
                pos += 1

                while pos < len(csv) and csv[pos] != csv[first_quote]:
                    values[count] += csv[pos]
                    pos += 1

            else:
                values[count] += csv[pos]

            pos += 1

        #if the value is numeric, this will convert it.
        values[count] = convert_to_number(values[count])

        count += 1
        pos += 1

    return values
