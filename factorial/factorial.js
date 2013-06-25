// Implementing recursive solution
module.exports = function factorial (number) {
  if(number<=1) return 1;
  return number*(factorial(number - 1);
}

// Implementing iterative solution
module.exports = function (number){
   var result = 1 ;
   for(i=1; i<=number; i++){
     result *= i;
   }
   return result;
}

//Implementing iterative solution 2 (going backwards in loop)

module.exports = function (number){
   var result = 1 ;
   for(i=number; i>1; i++){
     result *= i;
   }
   return result;
}
