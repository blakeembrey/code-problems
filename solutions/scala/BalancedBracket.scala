object Bracket {
  import scala.collection.mutable.Stack
  private val lefts  = Map('(' -> 1, '[' -> 2, '{' -> 3)
  private val rights = Map(')' -> 1, ']' -> 2, '}' -> 3)
  def isBalanced(brackets: String): Boolean = {
    val s = Stack[Char]()
    val test = brackets.forall { c =>
      if(lefts.contains(c)) {
        s.push(c)
        true
      }
      else if(rights.contains(c)) {
        if(s.isEmpty) false
        else if(lefts(s.top) == rights(c)) {
          s.pop
          true
        }
        else false
      }
      else throw new IllegalArgumentException
    }

    if(test && s.isEmpty) true else false
  }
}


// println(Bracket.isBalanced("()[]{}(([])){[()][]}"))
// println(Bracket.isBalanced("())[]{}"))
// println(Bracket.isBalanced("(<>)"))
