/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {

  let splicedEle =  someArr.splice(index, 1) //using the splice func to splice out an element at index # from array
  return splicedEle //returning the splicedElement

}

console.log(spliceElement([1,4,5,0,6], 3)) //return [0]
console.log(spliceElement([1,4,5,0,6], 4)) //retunr [6]
console.log(spliceElement([16,48,59,30,60,90, 100, 300, 1], 6)) //return [100]