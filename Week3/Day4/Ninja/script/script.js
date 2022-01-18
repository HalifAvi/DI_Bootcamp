

/********************Exercise 1 : Age Difference**************************/














/********************Exercise 2 : Zip Codes**************************/


// No RegularExp

let zipCode = prompt("Please enter your zipCode"); 

if((!isNaN(zipCode)) && (zipCode.indexOf(' ') === -1) && (zipCode.length === 5)){

		console.log("Success")
}
else{

	console.log("error");
}


// With RegularExp

let zipCode1 = prompt("Please enter your zipCode"); 

let regExp =  /^\d{5}$/;

if(regExp.test(zipCode1)){

		console.log("Success")
}
else{

	console.log("error");
}



/********************Exercise 3 : Secret Word**************************/

let userWord = prompt("Please enter a word");

console.log(userWord.replace(/[a|e|i|o|u]/gi, "")); // Also for UpperCase


// SECOND OPTION 

let userWord1 = prompt("Please enter a word");

let str = userWord.replace(/a/gi, "1");
let str1 = str.replace(/e/gi, "2");
let str2 = str1.replace(/i/gi, "3");
let str3 = str2.replace(/o/gi, "4");
console.log(str3.replace(/u/gi, "5"));

// THIRD OPTION

let userWord2 = prompt("Please enter a word");

const mapObj = {
  a: "1",
  e: "2",
  i: "3",
  o: "4",
  u: "5",
  A: "1",
  E: "2",
  I: "3",
  O: "4",
  U: "5",
};

str = userWord2.replace(/[a|e|i|o|u]/gi, matched => mapObj[matched]);
console.log(str);
















