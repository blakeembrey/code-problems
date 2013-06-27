from random import randint

def quickSort(lst):
    # List of 0 or 1 items is already sorted
    if len(lst) <= 1:
        return lst
    else:
        # Pivot can be chosen randomly
        pivotIndex = randint(0, len(lst)-1)
        pivot = lst[pivotIndex]
        # Elements lower than and greater than pivot
        lesser, greater = [], []

        for index in range(len(lst)):
            # Don't do anything if you're at the pivot
            if index == pivotIndex:
                pass
            else:
                # Sort elements into < pivot and >= pivot
                el = lst[index]
                if el < pivot:
                    lesser.append(el)
                else:
                    greater.append(el)
                    
        # Sort lesser and greater, concatenate results
        return quickSort(lesser) + [pivot] + quickSort(greater)
