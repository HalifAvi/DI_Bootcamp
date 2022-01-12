



/***************Exercise 1 : The World Translator******************/

let language = prompt("Which language do you speak?").toLowerCase();

switch(language){

	case "french": console.log("Bonjour");

		break;

	case "english": console.log("Hello");

		break;

	case "hebrew": console.log("Shalom");

		break;

	default: console.log("01110011 01101111 01110010 01110010 01111001");
}




/***************Exercise 2 : The Grade Assigner******************/

let grade = prompt("What is your grade?");

let optionsArr = [grade>90, grade>80 && grade<=90, grade>=70 && grade<=80, grade<70];

switch(optionsArr.indexOf(true)){

	case 0: console.log("A");

		break;

	case 1: console.log("B");

		break;

	case 2: console.log("C");

		break;

	case 3: console.log("D");

		break;

	default: console.log("Irralevent input! Check again!");
}





/***************Exercise 3 : Verbing******************/

let verb = prompt("Please enter a verb");

let verbLength = verb.length;

console.log(verb.substring(verb.length-3,verb.length));

let optionsArr1 = [(verbLength >= 3) && (verb.substring(verb.length-3,verb.length) !== "ing"),
				   (verbLength >= 3) && (verb.substring(verb.length-3,verb.length) === "ing"),
				    verbLength<3];

				  console.log(optionsArr.indexOf(true));

switch(optionsArr1.indexOf(true)){

	case 0: console.log(`${verb}ing`);

		break;

	case 1: console.log(`${verb}ly`);

		break;

	case 2: console.log(`${verb}`);

		break;

	default: console.log("Irralevent input! Check again!");
}






















