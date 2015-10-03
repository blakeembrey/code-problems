
def bubblesort(lst):
	for i in range(0,len(lst)-1):
		for j in range(i+1,len(lst)):
			if lst[i]>lst[j]:
				temp=lst[i]
				lst[i]=lst[j]
				lst[j]=temp
	return lst
	
l=[1,4,2,4,6,2,6,8,5,8,9,5]
for i in bubblesort(l):
	print (i)