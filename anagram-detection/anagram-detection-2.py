#return 0 if the sorted str1 and str2 have same sequence of char
def strCmp(str1,str2)
  a=list(str1)
  b=list(str2)
  return(cmp(a.sort(),b,sort());

def anagramDetection(parent, child):
  length = len(child)
  total = 0
  for i in range(0, len(parent) - length):
    if strCmp(parent[i: i + length],child) == 0:
      total = total + 1
  return total
