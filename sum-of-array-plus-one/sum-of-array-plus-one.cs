        public int SumOfIntegers(int[] integerArray)
        {
            int sum = 0;
            foreach (int item in integerArray)
            {
                sum += item + 1;
            }
            return sum;
        }
