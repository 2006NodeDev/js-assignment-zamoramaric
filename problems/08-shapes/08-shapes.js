/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  switch(shape) {
    case 'square': //created 2 cases for each shape //considering the use of upper case
    case 'Square':
     return square( height, character) //calling their indiv func to return the square per the height & charc
    break;
    case 'triangle':
    case 'Triangle':
    return triangle(height, character) //calling their indiv func to return the square per the height & charc
    break;
    case 'diamond':
    case 'Diamond':
    return diamond(height,character) //calling their indiv func to return the square per the height & charc
    default:
    console.log("You have entered an invalid shape.") //default case lets the user know they entered an invalid shape
    break;
  }  
}
function square(height, character){
  let s = ''
    for (let i = 0 ; i < height ; i++){ //loops height times  (row)
      for (let j = 0 ; j < height ; j++){ //loops & prints charc through each colunm height times
        s = s + character //use a string to push in the charcs are each row
      }
      s = s + '\n' //breaks the line to build a square vs printing on same line
     }
    return s
}
function triangle(height, character){
  let s = ''
  for (let i = 0 ; i < height ; i++){ //loops height times  (row)
    for (let j = 0 ; j < i+1 ; j++){ //loops & prints charc (number of current i+1) on each row 
      s = s + character //use a string to push in the charcs are each row
    } 
    s = s + '\n' //breaks the line to build a square vs printing on same line
   }
  return s
}
function diamond(height, character){
 let s = ''
 let numSpace = height-1 
  for (let i = 1 ; i <= height ; i++){ //creating the top half of the diamond
   for (let j=1;j<= numSpace;j++){ //loops to calc and make the correct number of spaces
      s = s + ' '  }
    numSpace--;
    for (k=1; k<=2*i-1;k++ ){  //loops to push not the string the correct number of characters
      s = s + character  }
    s = s + '\n'  //breaks the line to build a diamond vs printing on same line
  }
  numSpace=1;
    for(m=1;m<= height;m++){         //creating the second half of the diamond
        for(o=1;o<=numSpace;o++)//loops to calc and make the correct number of spaces
        { s = s + ' '    }
        numSpace++;
        for(p=1;p<=2*(height-m)-1;p++)    //loops to push not the string the correct number of characters
        {  s = s + character  }
         s = s + '\n'   //breaks the line to build a diamond vs printing on same line
        }
  return s
}
console.log( printShape('square',4, '$')); 
/*
$$$$
$$$$
$$$$
$$$$
*/
console.log( printShape('Square',4, '#')); 
/*
####
####
####
####
*/
console.log( printShape('triangle',4, '@')); 
/*
@
@@
@@@
@@@@
*/
console.log( printShape('triangle',10, '@'));
/*
@
@@
@@@
@@@@
@@@@@
@@@@@@
@@@@@@@
@@@@@@@@
@@@@@@@@@
@@@@@@@@@@
*/
console.log( printShape('diamond',3, '%'));
/*
 %
%%%
%%%%%
%%%
 %
*/