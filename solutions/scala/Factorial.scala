object Factorial {
  def apply(n: Int) = {
    if (n < 1) throw new IllegalArgumentException
    (1 to n) reduce { (mem, e) => mem * e }
  }
}
