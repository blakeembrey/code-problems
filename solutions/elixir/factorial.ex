defmodule Factorial do
  def factorial(n), do: Enum.reduce(1..n, &(&1 * &2))
end
