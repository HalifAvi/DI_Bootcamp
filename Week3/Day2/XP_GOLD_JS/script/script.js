



// Exercise 1 : Favorite Color

let me = ["my","favorite","color","is","blue"];

console.log(me.join(" "));

/**********************************************************************/


// Exercise 2 : Mixup

let str1 = "Hello";
let str2 = "World";

//Slice out the first 2 characters of the 2 strings
let str1ExtractLetters = str1.slice(0,2);
let str2ExtractLetters = str2.slice(0,2); 

//Swap the first 2 characters of the 2 strings
let newStr1 = str1.replace(str1ExtractLetters, str2ExtractLetters);
let newStr2 = str2.replace(str2ExtractLetters, str1ExtractLetters);

//Concatenation of the two strings
let concatedString = newStr1.concat(" ",newStr2);

//Print the new concatenated string
console.log(concatedString);


/**********************************************************************/

//Exercise 3 : Calculator

let num1 = prompt("Hello, please enter the first number");

let convertedNum1 = Number(num1);

let num2 = prompt("Hello, please enter the second number"); 

let convertedNum2 = Number(num2);

let sum = convertedNum1 + convertedNum2;

alert("The sum of " + num1 + " + " + num2 + " is : " + sum);




