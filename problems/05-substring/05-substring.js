/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    let subStrgAr = [] //create temp array to store substring
    let resultV = validate (startIndex,endIndex, someStr.length)
    if (resultV == true){
        for(let i=0; i < someStr.length;i++){ //looo through someStr n time someStr.length 
            if (i == startIndex){ //first checkis the startIndex; will loop in i
                subStrgAr.push(someStr[i]); //when reaching startIndex it's pushed into array
            for(let j = i+1; j < endIndex;j++){ //nested look until reaching the end Index 
                subStrgAr.push(someStr[j]); //pushes the characters into array until reaching the endIn
                                                //end index not included
            }
            break; //breaks after finding startIndex and performing the nested tasks
    }
}
    let subString = subStrgAr.join('') // //using the join function we join the reversed characters in the array & join a a string
    return subString
    }
    else {
        throw new UserException('Invalid input') //throws exception if it did not pass the the validation
    }

}
function validate(startI, endI, length){ //function created to validare the input
    if (startI > length || endI > length){ //returns false if it does not pass the validation
        return false
    }
    else 
        return true //returns true if it passes the validation
}
function UserException(message) { //
    this.message = message; //sets the message 
    return console.log(message) //return the error message
 }
console.log( substring('hello',0,10)); //result throws error
console.log( substring('hello',0,3)); //result 'hel'
console.log(substring('washington', 4, 6)) //result 'in' 