

// Exercise 1: Sum Elements

let array = [1,2,3,4,2,4,1,0,1,4];

console.log(array.reduce((prev, curr) => prev + curr,0));


// Exercise 2 : Remove Duplicates

array = array.filter( (element, idx) => array.indexOf(element, idx+1) === -1)

console.log(array);


// Exercise 3 : Remove Certain Values

let arr = [NaN, 0, 15, false, -22, '',undefined, 47, null];

// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array


let equalToSpecificData = elementToCheck => /\bnull|NaN|0|undefined|false|\b /.test(elementToCheck);
  
console.log(arr) // before

arr = arr.filter( element => !(equalToSpecificData(element)))

console.log(arr) // after


// Exercise 4 : Repeat Please !

// Write a JavaScript function to concatenate a given string n times (default is 1).

let repeatStr = (str, n=1) => {

    let toPrint = "";

    while(n>0){

        toPrint += str.padStart(str.length, str);

        n--;
    }

    console.log( toPrint );
}

repeatStr("avi",12)


// Exercise 5 : Turtle & Rabbit

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';


console.log(startLine);
console.log(turtle);
console.log(rabbit);

turtle = turtle.trim().padEnd(9, '=');

console.log(turtle);