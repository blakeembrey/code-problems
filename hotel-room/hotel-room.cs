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

        static List<List<int>> getSubsets(int[] divisors) 
        {
            List<List<int>> subsets = new List<List<int>>();
            foreach (int division in divisors)
            {
                foreach (List<int> subset in subsets)
                {
                    List<int> pom = new List<int>();
                    pom.Add(division);
                    subsets.Add(pom);
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
