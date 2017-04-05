for i in range(1,101):
 o=''if i%3else'Fizz'
 if i%5==0:o+='Buzz'
 print(o if o else i)
