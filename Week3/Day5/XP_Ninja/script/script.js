

// Exercise 1: Checking The BMI

// Create two objects, each object should hold a person’s details


user1 = {

	FullName: "Avi",
	Mass: 100,
	Height: 1.83,
	BMI: function(Mass, Height){ return (Mass/(Math.pow(Height, 2))); }
};

user2 = {

	FullName: "Shlomi",
	Mass: 200,
	Height: 1.83,
	BMI: function(Mass, Height){ return (Mass/(Math.pow(Height, 2))); }
};


console.log(user1.BMI(user1.Mass, user1.Height));
console.log(user2.BMI(user2.Mass, user2.Height));

compareBMI();

function compareBMI(){

	let options = [ user1.BMI(user1.Mass, user1.Height) > user2.BMI(user2.Mass, user2.Height),
					user1.BMI(user1.Mass, user1.Height) < user2.BMI(user2.Mass, user2.Height),
					user1.BMI(user1.Mass, user1.Height) === user2.BMI(user2.Mass, user2.Height) ];

console.log(user1.BMI(user1.Mass, user1.Height));

	switch(options.indexOf(true)){

		case 0 : console.log(`${user1.FullName} has the largest BMI`);

			break;

		case 1 : console.log(`${user2.FullName} has the largest BMI`);

			break;

		case 2 : console.log("Both of them have the same BMI! :)");
	}
}



// Exercise 2 : Grade Average

let gradesList = [65, 65, 65];

findAvg(gradesList);

function findAvg(gradesList){

	let sum = 0;

	for(let i=0; i<gradesList.length; i++){

		sum += gradesList[i];


	}

	let average = sum / gradesList.length;

	console.log(`Your average is ${average}`);

	checkAverage(average);
}


function checkAverage(average){

	if(average >= 65){

		console.log(`You passed! :)`);
	}
	else{

		console.log(`You failed and must repeat the course!!! :(`);
	}
}

