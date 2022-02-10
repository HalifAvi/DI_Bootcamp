
let strWithoutSpaces = str => str.replace(/\s/g, '');


let isAnagram = (strToCheck, strToCheckWith) => {

    let anagram = false;

    // First - convert strings to arrays in lowerCase letters and sort them
    let sortedLetterArrayWithoutSpacesToCheckWith = strWithoutSpaces(strToCheckWith.toLowerCase()).split("").sort();
    let sortedLetterArrayWithoutSpacesToCheck = strWithoutSpaces(strToCheck.toLowerCase()).split("").sort();

    // To return true first condition is to be the same length
    if(sortedLetterArrayWithoutSpacesToCheckWith.length !== sortedLetterArrayWithoutSpacesToCheck.length){

        return anagram;
    }

    // To return true the second condition is to have excactlly the same amount of letters
    return sortedLetterArrayWithoutSpacesToCheck.every( (letter, idx) => letter === sortedLetterArrayWithoutSpacesToCheckWith[idx] );
}


console.log( isAnagram("Astronomer", "Moon starer") );
console.log( isAnagram("School master", "The classroom") );
console.log( isAnagram("The Morse Code", "Here come dots") );



