var numericString = function (number) {

  return ('' + number) // toString
    
    .replace(/\.|,/g, '') // remove any previous delimiters
    
    .split('') // toArray
   
    .reverse() // reverse the array
   
    .join('') // toString
   
    .replace(/(\d{3})/g, '$1,') // add a separator after any 3 digit group
    
    .split('') // toArray
    
    .reverse() // reverse it back
    
    .join(''); // convert it back to a string
};