def shortest_fizz_buz():
    for i in xrange(0, 100):
        s = ''
        ss = False
        if ((i + 1) % 3 == 0):
            s +='Fizz'
        if ((i + 1) % 5 == 0):
            s +='Buzz'
        if ((i + 1) % 3 > 0 and (i + 1) % 5 > 0):
            print(i + 1)
        else:
            print(s)
