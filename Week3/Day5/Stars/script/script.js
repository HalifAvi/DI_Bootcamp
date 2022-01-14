

// Option 1 : 2 FOR LOOPS

let rowNumber = parseInt(prompt("How many number do you want?"));


for(let row = 1; row <= rowNumber; row++){

	let line = "";

	for(let numOfStars = 1; numOfStars <= row; numOfStars++){

		line += "*";

	}

	console.log(line);
}



// Option 2 : 1 LOOP

let rowNumber1 = parseInt(prompt("How many number do you want?"));

let line = "";

for(let row = 1; row <= rowNumber1; row++){

		line += "*";

		console.log(line);

	}

	



