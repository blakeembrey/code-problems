object ArrayPairSum {
  def apply(total: Int, ns: List[Int]) = {
    val numMap = ns.groupBy(num => num).mapValues(_.length)
    numMap.flatMap { t =>
      val (num, count) = t
      if (2 * num == total) {
        if(count == 1) Nil
        else { for(i <- Range(0, count * (count - 1) / 2)) yield List(num, num) }
      } else if (numMap.contains(total - num) && num < total - num) {
        for(i <- Range(0, count * numMap(total - num))) yield List(num, total - num)
      } else Nil
    }
  }
}

// println(ArrayPairSum(10, List(3, 4, 5, 6, 7)))
// println(ArrayPairSum(8, List(3, 4, 5, 4, 4)))
