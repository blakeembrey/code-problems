public int SumOfIntegers(int[] integerArray)
{
  int sum = 0;
  foreach (int item in integerArray)
  {
    sum += item;
  }
  return sum + integerArray.Length;
}
