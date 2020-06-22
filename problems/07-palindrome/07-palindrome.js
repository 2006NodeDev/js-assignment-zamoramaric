/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */


//import { reverseStr } from "C/Users/maricruz.zamora/Documents/GitHub/js-assignment-zamoramaric/problems/03-reverse-string/03-reverse-string";
//C:\Users\maricruz.zamora\Documents\GitHub\js-assignment-zamoramaric\problems\
//tried to import function to reuse code but could not get the import to run

 function isPalindrome(someStr) {
  
    //piece of code from reverse-string func
   // let reverdedString = reverseStr(someStr)
    let sReversed = []; //created a string array which will contain the reversed string characters
    for (let i = someStr.length-1; i >= 0 ;i--){ //starts at the end of the string and loops to the first letter
        sReversed.push(someStr[i]) //pushes the reversed letter character into an empty array    
    }
    let reversedArray = sReversed.join("")

  if (someStr == reversedArray){
      return true
  }

  else {return false}
}

console.log(isPalindrome('apple')) //false
console.log(isPalindrome('pop')) //true
console.log(isPalindrome('popcorn')) //false
console.log(isPalindrome('civic')) //true

