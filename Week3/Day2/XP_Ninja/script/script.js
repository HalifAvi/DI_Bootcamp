
// Exercise 1 : Evaluation


5 >= 1
// Prediction: true. Boolean expression. 5 is bigger than 1.
// Actual: true.

 0 === 1
// Prediction: false. Comparision between values and types. The values here are not equal.
// Actual: false.

4 <= 1
// Prediction: false. Boolean expression. 1 is not bigger than 4.
// Actual: false.

1 != 1
// Prediction: false. Boolean expression. 1 is equal to 1.
// Actual: false.

"A" > "B"
// Prediction: false. Boolean expression. The value of A is smaller than the value of B. 
// Actual: false.

"B" < "C"
// Prediction: true. Boolean expression. The value of C is bigger than the value of B. 
// Actual: true.

"a" > "A"
// Prediction: true. Boolean expression. The ASCII value of a is 97 and it's bigger than the ASCII value of A. 
// Actual: true.

"b" < "A"
// Prediction: false. Boolean expression. The ASCII value of A is it's not bigger than the ASCII value of b. 
// Actual: false.

true === false
// Prediction: false. Boolean expression. The type is equal but the value isn't. 
// Actual: false.

true != true
// Prediction: false. Boolean expression. They are equal.
// Actual: false.

/********************************************************************************/

// Exercise 2 : Ask For Numbers

let numbersString = prompt("Please enter a string of numbers separated by commas");

let array = numbersString.split(","); // Each time you have "," set as a cell in the array

console.log(array);
console.log(array.length);

let sum = 0;

for (let i = 0; i < array.length ; i++) {
  sum = sum + Number(array[i]);
}

console.log(sum);

/********************************************************************************/

// Exercise 3 : Find Nemo

let sent = prompt("Please enter a sentence containing the word Nemo");

let position = sent.search("Nemo");


if(position != -1)
	console.log(`I found Nemo at ${position}`);
else
	console.log(`I can’t find Nemo`);

/********************************************************************************/

// Exercise 4 : Boom

let number = prompt("Please enter an number");

if((number < 2) && (number%2==0) && (number%5==0))
	console.log("BOOM!");

else if((number < 2) && (number%2==0))
	console.log("boom!");

else if(number < 2)
	console.log("boom");

else if((number > 2) && (number%2==0) && (number%5==0)){

	for (let i = 0; i < number ; i++) {
  		console.log("O");
	}

	console.log("!");
}

else if((number > 2) && (number%2==0)){

	for (let i = 0; i < number ; i++) {
  		console.log("o");
	}

	console.log("!");
}

else if(number > 2){

	for (let i = 0; i < number ; i++) {
  		console.log("o");
	}
}








