/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {

    if((someNum & 1) == 0){ //used bitewise & Operator : looking at the binary represe.
                            // & rtns a 1 in each bit pos which both oper are one
        return true //return true someNum is even
    }
    else{return false} //return false someNum is odd


 /*
  let div = someNum / 2;
  let tryD = Array.from(div.toString()).map(Number);
  let n = tryD.pop();
if (someNum == 2){
    return true
}
else if( n == 0 || n == 2 || n == 4 || n == 6 || n == 8){
    return true
}
else {return false}
*/
}

console.log(isEven(4)) //result true
console.log(isEven(11)) //result false
console.log(isEven(1)) // result false
console.log(isEven(2)) //result true
console.log(isEven(3)) //result false
console.log(isEven(6)) //result true
