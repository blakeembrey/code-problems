def shortest_fizz_buzz
  (1..100).to_a.each{|i|puts i%3==0&&i%5==0 ? "FizzBuzz": i%3==0 ? "Fizz": i%5==0 ? "Buzz": i}
end
