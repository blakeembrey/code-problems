class Integer

  # Iterative
  def factorial_simple number
    fat = 1
    for n in 2..number do 
      fat = fat * n
    end
    fat
  end

  # Iterative Reverse Loop
  def factorial_reverse number
    (n-1).downto(1).each {|i| n *= i}
    n
  end

  # Recursive - Ternary Operator
  def factorial_recursive number
    (number == 1)? 1: (number * factorial_recursive(number-1))      
  end

  # The Ruby-iest version, using reduce function
  def factorial_reduce(number)
    (1..number).reduce(:*)
  end

  alias_method :factorial :factorial_reduce
end