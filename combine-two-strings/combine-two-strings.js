var combineTwoStrings = function (str1, str2, str3) {
  var pos1 = 0,
      pos2 = 0;
      
  if (str1 + str2 === str3) { return true; }
  
  for (var i = 0; i < str3.length; i++) {
    if (str3[i] === str1[pos1]) {
      pos1++;
    } 
    else if (str3[i] === str2[pos2]) {
      pos2++;
    } 
    else if (str3.length - i - 1 < str1.length - pos1 + str2.length - pos2) {
      return false;
    } 
  }
  return true;
};
