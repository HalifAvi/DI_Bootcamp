
// Exercise 1: Random Number

const randomNum = () => {

    return Math.floor(Math.random() * 100) + 1; // 0-100
}

const printEvenNumbers = number => {

    let toPrint = "";

    for(let i=0; i<number; i++){

        if(i%2==0){

            toPrint += i + ", ";
        }
    }

    console.log(toPrint);
}


let number = randomNum();

console.log("The random number is: " + number);

printEvenNumbers(number);

/*****************************************************************************/

// Exercise 2: Capitalized Letters

const CapitalizedLetters = (str) => {

    console.log(`[${evenToUpper(str)} , ${oddToUpper(str)} ]`);
} 


const evenToUpper = (str) => {

    let strEvenToUpper = "";

    for(let i=0; i<str.length; i++){

        if(i%2 === 0){
            
            strEvenToUpper += str[i].toUpperCase();
        }
        else{

            strEvenToUpper += str[i].toLowerCase();
        }
    }

    return strEvenToUpper;
}


const oddToUpper = (str) => {

    let strOddToUpper = "";

    for(let i=0; i<str.length; i++){

        if(i%2 === 0){
            
            strOddToUpper += str[i].toLowerCase();
        }
        else{

            strOddToUpper += str[i].toUpperCase();
        }
    }

    return strOddToUpper;
}

CapitalizedLetters("abcdef");


/***************************************************************************************/

// Exercise 3 : Is Palindrome?

const isPalindrome = (str) => {

    for(let i=0; i<str.length; i++){

        if(str[i] !== str[str.length-1-i]){

            return false;
        }
    }

    return true;
}

console.log(isPalindrome("madm"));

/*************************************************************************************/

// Exercise 4 : Biggest Number

const biggestNumber = array => {

    let biggersNum = 0;

    for(let i=0; i<array.length; i++){

        if(array[i] > biggersNum){

            biggersNum = array[i];
        }
    }
    return biggersNum;
}



console.log(biggestNumber([-1,0,3,100, 99, 2, 99]));
console.log(biggestNumber(['a', 3, 4, 2]));
console.log(biggestNumber([]));


/*************************************************************************************/

// Exercise 5: Unique Elements
const uniqueElements = array => {

    let newArr = [ ];

    if(array.length != 0){

        let j = 1;

        newArr[0] = array[0];
    
        for(let i=1; i<array.length;i++){
    
            if(array[i-1] !== array[i]){
    
                newArr[j++] = array[i];
            }
        }
    }
 
    return newArr;
}


let list1=[1,2,3,3,3,3,4,5];

let list2=[1,2,3,3,3,3,4,5];

console.log(uniqueElements(list1));

console.log(uniqueElements(list2));

