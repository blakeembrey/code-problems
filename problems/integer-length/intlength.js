function intlength()
{
let 
num = x /*the integer to compute length*/,
count = 0 /*store length*/;

/*divide number until the least order is reached*/
while(num>0)
{
num /= 10;
count++;
}
/*return count, equivalent to length of the integer*/
return count;

}
