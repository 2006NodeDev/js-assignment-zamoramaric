/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */


function objectProperties(someObj) {

for(property in someObj){
    console.log(`${property}: ${someObj[property]}`) //for in loop typically used when working with objects
}                                                     //using this for in loop to access and print the properites of each obj
}

function usState(stateName, region, governor,captial ){ //used the function-object to create usState objecy
    this.stateName = stateName                             //this object contains 4 properties 
    this.region = region
    this.governor = governor
    this.captial =captial
}

let michigan = new usState('Michigan', 'Midwest', 'Gretchen Whitmer', 'Lansing') //created 3 state objects 
let cali = new usState('California', 'West Coast', 'Gavin Newsom','Sacramento') //with their 4 properties
let texas = new usState('Texas', 'Southwest','Greg Abbott','Austin' )

objectProperties(michigan) //called the objectPropeties func, passing in the objects created
objectProperties(cali) //this func with access the objects and their properies
objectProperties(texas)  ///using these 3 objects as test cases