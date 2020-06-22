/* 3. Reverse String 
Define function: reverseStr(someStr)
Reverse and return the String. */

//import { isPalindrome } from "./07-palindrome/07-palindrome.js"

export function reverseStr(someStr) {
    let sReversed = []; //created a string array which will contain the reversed string characters
    for (let i = someStr.length-1; i >= 0 ;i--){ //starts at the end of the string and loops to the first letter
        sReversed.push(someStr[i]) //pushes the reversed letter character into an empty array    
    }
    let reversedArray = sReversed.join("") // //using the join function we join the reversed characters in the array & join a a string
    return reversedArray //returns the reversed string
}
console.log(reverseStr('hello'));
console.log(reverseStr('Google Cloud Platform'))
console.log(reverseStr('Apple'));