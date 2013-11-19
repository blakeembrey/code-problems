def multiples_of_three_and_five
  (1...1000).to_a.select { |num| num % 3 == 0 || num % 5 == 0 }.reduce(&:+)
end
