


/******Exercise 1: Simple If/Else Statement******/

let num1 = 10;
let num2 = -7;
let biggest;

// Write an if/else statement that checks which number is bigger

if(num1 === num2){

	console.log("The numbers are equal");

}
else{	

	if(num1 > num2){

		biggest = num1;

	}
	else{

		biggest = num2;
	}

	console.log(`${biggest} is the biggest number`);
}


/******Exercise 2: Chihuahua******/

let newDog = "Chihuahua"; 


// Check and display how many letters are in newDog
let howManyLetters = newDog.length;

console.log(howManyLetters);

// Display the newDog variable in uppercase and then in lowercase
console.log(newDog.toUpperCase());

console.log(newDog.toLowerCase());

// Check if the variable newDog is equal to “Chihuahua”
switch(newDog){

	case 'Chihuahua': console.log("I love Chihuahuas, it’s my favorite dog breed");

		break;

	default: console.log("I dont care, I prefer cats");
}


/******Exercise 3: Even Or Odd******/

let x = prompt("Hello! Please enter a number :)");

let xConvertToNumber = Number(x); // return number(if the user entered num) or NaN (if the user entered string)

// Check if the user enter a number
if(!(isNaN(xConvertToNumber))){

	// Check whether the variable is even or odd
	if(xConvertToNumber % 2 == 0){

		console.log(`${xConvertToNumber} is an even number`);
	}
	else{

		console.log(`${xConvertToNumber} is an odd number`);
	}
}
else{

		console.log("You didn't enter a number!!!");
}


/******Exercise 4: Group Chat******/

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

let howManyOnline = users.length;

console.log(howManyOnline);

// Array contains the all options for online users
let optionsArr = [howManyOnline == 0, howManyOnline == 1, howManyOnline == 2, howManyOnline > 2];

// Let me know which one of the array cell is true
switch(optionsArr.indexOf(true)){

case 0: console.log(`no one is online`);
		
		break;

case 1: console.log(`${users[0]} is online`);
		
		break;

case 2: console.log(`${users[0]} and ${users[1]} are online`);

		break;

// If there are more than 2 online users
default : console.log(`${users[0]} , ${users[1]} and ${users.length-2} more are online`);

}









