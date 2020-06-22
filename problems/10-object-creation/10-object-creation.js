/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/


//object literal // Literals  = {}

let humanUnoA = { //declare obj name and fields
    name: 'Mary',
    age: 15
}

let humanUnoB = { //declare obj name and fields
    name: 'Adam',
    age: 21
}
console.log(humanUnoA);
console.log(humanUnoB);



//constructor function //New keyword with a function -- function constructor
function humanDos(name,age){ //declare obj type and fields
    this.name = name
    this.age = age
}
let humanDosA = new humanDos('John', 50) //create new obj
console.log(humanDosA);

let humanDosB = new humanDos('Jessica', 59) //create new obj
console.log(humanDosB);




//es6 class  //new keyword with a class ( is actually second the option, it just has different syntax )
console.log('es6 class')
class HumanThree{
   name
   age
   constructor(name, age){
       this.name = name
       this.age = age
   } 
} 

let humanTresA = new HumanThree('Maricruz', '24') //creates the new obj
console.log(humanTresA) //prints the object fields
let humanTresB = new HumanThree('Jose', '20') //creates the new obj
console.log(humanTresB) //prints the object fields
