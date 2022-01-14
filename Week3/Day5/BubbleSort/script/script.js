

const numbers = [5,0,9,1,7,4,2,6,3,8];

console.log(numbers.toString()); // CONVERT THE ARRAY TO STRING

console.log(numbers.join("---")); // CONVERT THE ARRAY TO STRING WITH SIGNS BETWEEN THE NUMBERS

let tempNum;

for(let i=0; i < numbers.length; i++){ // WE DO ITERATIONS ACCORDING TO THE ARRAY LENGTH

	for(let j=1; j < numbers.length - i; j++){ // HOW MANY COMPARISONS WE HAVE AT THAT ITERATION
											   // EVERY ITERATION WE HAVE ONE ITERATION LESS THAN BEFORE
		if(numbers[j-1] < numbers[j]){

			tempNum = numbers[j];
			numbers[j] = numbers[j-1];
			numbers[j-1] = tempNum;
		}
	}

	console.log(`NO#${i+1 } iteration : ${numbers}`); // AT THAT POINT WE ALWAYS HAVE THE SMALLEST
													// VALUE ON THE RIGHT SIDE OF THE ARRAY
}

console.log(`THE LAST RESULT : ${ numbers}`); // THE LAST RESULT : SORTED ARRAY
