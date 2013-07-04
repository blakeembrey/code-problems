char[] delimiter = new char[] { ' ' };
public List<string> FindLongestWords(string sentence)
{
  List<string> longestWords = new List<string>();
  int currentLongestLength = 0;
  string[] words = sentence.Split(delimiter, StringSplitOptions.RemoveEmptyEntries);
  if (words != null && words.Length > 0)
  {
    foreach (string word in words)
    {
      // Duplicate check.
      if (!longestWords.Contains(word.ToLower()))
      {
        // If word is longer than the current longest. We clear our word list and add only this one.
        if (word.Length > currentLongestLength)
        {
          longestWords.Clear();
          longestWords.Add(word.ToLower());
          currentLongestLength = word.Length;
        }
        // If word's length equals currentLongest, we just add it to the list.
        else if (word.Length == currentLongestLength)
        {
          longestWords.Add(word);
        }
      }
    }
  }
  return longestWords;
}
