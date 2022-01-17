

// Exercise 1 : Is_Blank
const isBlank = stringToCheck => {

    if(stringToCheck===""){

        return true;
    }
    else{
        return false;
    }
}


console.log(isBlank('')); // true
console.log(isBlank('abc')); // false


/************************************************************************************/


// Exercise 2 : Abbrev_name

const abbrevName = str => {

   arr = str.split(" "); // String to Array

   arr[1] = arr[1][0] + ".";

   return arr.join(" "); // Array to String

}

console.log(abbrevName("Robin Singh")); // "Robin S."

/************************************************************************************/

// Exercise 3 : SwapCase

const SwapCase = str => {

    let swapStr = "";
    let letter;

    for(let i=0; i<str.length; i++){

        if(str[i] === str[i].toUpperCase()){
            letter = str[i].toLowerCase();
        }
        else{
            letter = str[i].toUpperCase();
        }
         swapStr += letter;
    }

    return swapStr;
}

console.log(SwapCase("The Quick Brown Fox"));

/**********************************************************************************/

// Exercise 4 : Omnipresent Value
const isOmnipresent = (arr, number) => {

    if(arr.length === 0){

        return false;
    }

    for(let i=0; i<arr.length; i++){

        if(arr[i].indexOf(number) === -1){

            return false;
        }
    }

    return true;
} 


console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ); // true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // false