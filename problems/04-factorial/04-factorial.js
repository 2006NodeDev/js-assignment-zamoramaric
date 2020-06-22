/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) { 

    if (sumNum >= 1){ //checks if value is greater than 1; if so we use recursion to calculate the factorial result
        return sumNum * factorial(sumNum-1) // facotrial calc and recursive call
    }
    else {return 1 } //if the sumNum was 1 we just return 1 as the result since there's no calc needed
                    //we know 1 factorial is 1
}
console.log(factorial(1)) //result 720 ; makes it to the else and just returns 1 as the factorial
console.log(factorial(6)) //result 720 ; makes if through the if and uses recursion by calling back the function while calculating the factorial
console.log(factorial(7)) //result 5040 ; makes if through the if and uses recursion by calling back the function while calculating the factorial
console.log(factorial(8)) //result 40320 ; makes if through the if and uses recursion by calling back the function while calculating the factorial
console.log(factorial(13)) //result 6227020800 ; makes if through the if and uses recursion by calling back the function while calculating the factorial
