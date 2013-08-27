/* this is program written in C# by Alvareto */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hotelRoom
{
    class Program
    {
        static int[] getDivisors (int number)
        {
            List<int> divisors = new List<int>();
            for (int i = number; --i > 0; )
                if (number % i == 0)
                    divisors.Add(i);
            return divisors.ToArray();
        }
        
        //get the smallest integer m greater than n,
        //both n and m have same number of '1' in their binary string
        static int getNextN(int n){
            int temp1 = n & (-n);//point out the first '1' in n's binary string form right to left
            int temp2 = n + temp1;
            int ret = temp2 | ((n ^ temp2) / temp1) >> 2;
            return ret;
        }
        static List<List<int>> getSubsets(int[] divisors)
        {
            List<List<int>> subsets = new List<List<int>>();
            int num = divisors.Length;
            for (int i = 1; i <= num; i++) { //get divisors's i element subsets 
                int beginIdx = (1 << i) - 1;
                int endIdx = (1 << num) - (1 << (num - i));
                for (int j = beginIdx; j <= endIdx; ) { //the index of '1' in j's binary string from rigth to left indicates divisors[index] is in the subset
                    //TODO:output subset
                    List<int> subset = new List<int>();
                    int index = 0;
                    int k = j;
                    while (k>0) {
                        if (k % 2 == 1) subset.Add(divisors[index]);
                        k /= 2;
                        index++;
                    }
                    subsets.Add(subset);
                    j = getNextN(j);
                }
            }
            return subsets;
        }


        static bool isRoom(List<List<int>> subsets, int room)
        {
            foreach (List<int> subset in subsets)
            {
                if (subset.Sum() == room)
                    return false;
            }
            return true;
        }
        
        static void findRoom(int totalRooms)
        {
            for (int i = 0; ++i < 101; )
            {
                int[] divisors = getDivisors(i);
                int sum = divisors.Sum();

                if (sum <= i)
                    continue;

                if (isRoom(getSubsets(divisors), i))
                {
                    Console.WriteLine(i);
                    break;
                }
            }
        }

        static void Main(string[] args)
        {
            int input = Convert.ToInt32(Console.ReadLine());
            findRoom(input);
        }
    }
}
