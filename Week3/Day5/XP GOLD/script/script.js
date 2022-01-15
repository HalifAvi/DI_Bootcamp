
// Exercise 1 : Divisible By Three

let numbers = [123, 8409, 100053, 333333333, 7];

let answer = "";

numbers.forEach(checkDivisionByThree);

console.log(answer);

function checkDivisionByThree(number){

	if(number%3 === 0){

		answer += "true, ";
	}
	else{

		answer += "false, ";
	}
}



// Exercise 2 : Attendance

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

let userName = prompt("What is your name?").toLowerCase();
let isInObj = false;

for(const name in guestList){

	if(name.toLowerCase() === userName){

		console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}`);
		isInObj = true;
		break;
	}
}

if(!isInObj){

	console.log("Hi! I'm a guest");
}




// Exercise 3 : Playing With Numbers

let age = [20,5,12,43,98,55];
let sum = age[0];
let biggest = age[0];

for(let i=1; i<age.length; i++){

	sum += age[i];

	if(age[i-1] < age[i]){

		biggest = age[i];
	}
}

console.log(sum);
console.log(biggest);