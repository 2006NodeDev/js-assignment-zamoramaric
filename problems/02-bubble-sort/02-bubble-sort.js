/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

function bubbleSort(numArray) {
  
let sizeAr = numArray.length; //setting the length of the array
let secArr = numArray;

    for(let i = 0; i < sizeAr;i++){ //added nested loop; loops array n size times ; this is taking cares of passes 
                                    //makes sure it does enough passes to have the entire array in order
    for(let i = 0; i < sizeAr;i++){ // We loop through the array to check for rightNum < than leftNum
        
        if (secArr[i] > secArr[i+1]){ //validating if the left number is less than the right number
            let tempVar = secArr[i]; // if num A > B we do swap ; set A value to tempVae
            secArr[i] = secArr[i+1]; //A place is set to B
            secArr[i+1] = tempVar; // orig B value/tempVar set to place 
        }
    }
    }
return secArr;
} 
console.log(bubbleSort([33,90,50,40,77,100, 1])); //result [1,33,40,50,77,90,100]
console.log(bubbleSort([21,14,15,28,21])); //[14,15,21,21,28]
console.log(bubbleSort([5,1,6,0,2])); //[0,1,2,5,6]