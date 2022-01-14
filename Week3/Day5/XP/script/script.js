
/*****************Exercise 1 : List Of People*************************/


// Part I - Review About Arrays

let people = ["Greg", "Mary", "Devon", "James"];

// Write code to remove “Greg” from the people array
people.splice(people.indexOf("Greg"),1); 

console.log(people);


// Write code to replace “James” to “Jason”
people.splice(people.indexOf("James"),1,"Jason"); 

console.log(people);


// Write code to add your name to the end of the people array

let myName = prompt("What is your name?");

people.push(myName);

console.log(people);


// Write code that console.logs Mary’s index
console.log(people.indexOf("Mary"));

// Write code to make a copy of the people array using the slice method
let originArr = people.slice(); // Keep the origin array before changes
people.pop(); // The copy should NOT include your name (The last value)
people.shift(); // The copy should NOT include “Mary” (The first value)
let newArr = people.slice(); // extracts the part of a string and return in a new string

console.log(newArr);


// Write code that gives the index of “Foo”
console.log(people.indexOf("Foo")); // Returns -1 cause we don't have "Foo" value in the array


// Create a variable called last which value is the last element of the array
let last = people[people.length-1];

console.log(last);


// Part II - Loops

// Using a loop, iterate through the people array and console.log each person
originArr.forEach(printArr);

function printArr(peopleElement, index){

	console.log(`NO#${ index} : ${peopleElement}`);
};

console.log("           "); // NEW LINE

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason”

for(let i=0; i < originArr.length; i++){

	console.log(`NO#${ i} : ${originArr[i]}`);

	if(originArr[i] === "Jason"){

		break;
	}
}


console.log("           "); // NEW LINE

// Exercise 2 : Your Favorite Colors

// Create an array called colors where the value is a list of your five favorite colors
let myFavoriteColors = ["yellow","orange","blue","red","green"];
let suffixArr = ["st","nd","rd","th","th"];

myFavoriteColors.forEach(printMyColors);

function printMyColors(color, index){

	console.log(`My ${index+1}${suffixArr[index]} choise is ${color}, `);
};


// Exercise 3 : Repeat The Question

let userNum;

do{
		userNum = parseInt(prompt("Please enter a number"));

} while(isNaN(userNum) || userNum < 10); // Continue ask a number from user as long as it's not a input number



// Exercise 4 : Building Management

let building = { // AN OBJ

    numberOfFloors : 4, // FIRST VALUE

    numberOfAptByFloor : { // SECOND VALUE - AN OBJ
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },

    nameOfTenants : ["Sarah", "Dan", "David"], // THIRD VALUE

    numberOfRoomsAndRent:  { // FOURTH VALUE - AN OBJ
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
};


// Console.log the number of floors in the building
console.log(building.numberOfFloors);

// Console.log how many apartments are on the floors 1 and 3
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);


// Console.log the name of the second tenant 
let nameOfSecondTenant = (building.nameOfTenants[1]).toLowerCase();
console.log(nameOfSecondTenant);

// Console.log the number of rooms he has in his apartment
console.log(building.numberOfRoomsAndRent[nameOfSecondTenant][0]);

// Check if the sum of Sarah’s and David’s rent is bigger than
// Dan’s rent. If it is, than increase Dan’s rent to 1200

let parameters = [ building.numberOfRoomsAndRent["sarah"][1],
				   building.numberOfRoomsAndRent["david"][1],
				   building.numberOfRoomsAndRent["dan"][1]    ];

if(parameters[0]+parameters[1] > parameters[2]){

	building.numberOfRoomsAndRent["dan"][1] += 200;
}

console.log(building.numberOfRoomsAndRent["dan"][1]);



// Exercise 5 : Family

// Create an object called family with a few key value pairs 
let family = {

	father: "Dan",
	mother: "Dana",
	brother: "Shlomi",
	sister: "Gal"
};

// Using a for loop, console.log the keys of the object
for(const familyMember in family){

	console.log(familyMember);
}

console.log("           "); // NEW LINE

// Using a for loop, console.log the values of the object
for(const familyMember in family){

	console.log(family[familyMember]);
}





// Exercise 6

let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}


let keyValueDetailsArr = Object.entries(details); // Return array with 3 arrays inside

console.log(keyValueDetailsArr);//////////

let sentence = "";

// for(let i=0; i<keyValueDetailsArr.length; i++){

// 	sentence = sentence + keyValueDetailsArr[i] + " ";
// }

sentence = sentence + keyValueDetailsArr[0][0] + " " + keyValueDetailsArr[0][1] ;
console.log(sentence);
