/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {

 if(n<= 1){ //validating if the n < or = to 1
    return n   //if so we return n & n is the aswer
}
  else{  return fib(n-1) + fib(n-2) }// if n > 1 we run mathematical recursion of the fibo sequence 
}

console.log(fib(8)) //result 21
console.log(fib(2)) //result 1
console.log(fib(9)) //result 34