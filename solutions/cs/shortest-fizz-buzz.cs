using System;
namespace fizz_buzz
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int i = 1; i < 101; i++)
            {
                if (i % 3 < 1)
                    Console.Write("fizz");
                if (i % 5 < 1)
                    Console.Write("buzz");
                if (i % 3 > 0 && i % 5 > 0)
                    Console.Write("{0}", i);
                Console.WriteLine("");
            }
        }
    }
}
