object Fibonacci {
  // accept a pos, starting with 1
  def apply(pos: Int) = {
    if (pos < 0) throw new IllegalArgumentException
    (1 until pos).foldLeft((0, 1))((t, _) => (t._2, t._1 + t._2))._1
  }
}
