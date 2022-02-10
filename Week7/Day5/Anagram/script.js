
let strWithoutSpaces = str => str.replace(/\s/g, '');

let isAnagram = (strToCheck, strToCheckWith) => {

    // First - sort the string as an array and then convert back to string
    let sortedLetterWithoutSpacesToCheckWith = strWithoutSpaces(strToCheckWith.toLowerCase()).split("").sort().join("");
    let sortedLetterWithoutSpacesToCheck = strWithoutSpaces(strToCheck.toLowerCase()).split("").sort().join("");

    // To return true first condition is to be the same length
    if(sortedLetterWithoutSpacesToCheckWith.length === sortedLetterWithoutSpacesToCheck.length &&
       sortedLetterWithoutSpacesToCheck.localeCompare( sortedLetterWithoutSpacesToCheckWith ) === 0){

        return true;
    }
    else{

        return false;
    }
}


console.log( isAnagram("Astronomer", "Moon starer") );
console.log( isAnagram("School master", "The classroom") );
console.log( isAnagram("The Morse Code", "Here come dots") );



