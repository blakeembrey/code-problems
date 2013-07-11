# Iterative version

def is_prime? number
  return 0 if (number == 0 or number == 1)
  
  for d in (2...number) do
    return 0 if (number % d == 0)
  end
  
  return 1
end

#built-in version

require 'mathn' #mathematical library

def is_prime2? number
  (Prime.prime? number)? 1:0
end
