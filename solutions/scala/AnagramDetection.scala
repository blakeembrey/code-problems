import scala.collection.immutable.HashMap

object AnagramDetection {
  def apply(parent: String, child: String): Int =
    parent.length - child.length match {
      case 0 => if (isAnagram(parent, child)) 1 else 0
      case x: Int if x < 0 => 0
      case _ =>
        (if (isAnagram(parent.take(child.length), child)) 1 else 0) +
        AnagramDetection(parent.drop(1), child)
    }

  def isAnagram(stra: String, strb: String) = {
    val hma = (HashMap[Char, Int]() /: stra) { (hmap, c) =>
      hmap updated (c, hmap.getOrElse(c, 0))
    }
    val hmb = (HashMap[Char, Int]() /: strb) { (hmap, c) =>
      hmap updated (c, hmap.getOrElse(c, 0))
    }

    if (hma == hmb) true else false
  }
}

// println(AnagramDetection("AbrAcadAbRa", "cAda")) => 2
// println(AnagramDetection("AdnBndAndBdaBn", "dAn")) => 4
