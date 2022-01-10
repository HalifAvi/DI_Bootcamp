

// Exercise 1: Your Favorite Food

let myFavoriteFood = "pizza"; // Store your favorite food into a variable.

let myFavoriteMeal = "lunch"; // Store your favorite meal into a variable.

console.log(`I eat ${myFavoriteFood} at every ${myFavoriteMeal}`);

/*********************************************************************************/

// Exercise 2 : Series
// PART 1

let watchedSeries = ["black mirror", "money heist", "the big bang theory"];

let watchedSeriesLength = watchedSeries.length; // NO #1 : watchedSeriesLength is equal to the number of series in the watchedSeries array

console.log(watchedSeriesLength);

// NO #2 : Create a variable named myWatchedSeries, that is equal to a sentence describing the series you watched
let myWatchedSeries = `${watchedSeries[0]}, ${watchedSeries[1]}, and ${watchedSeries[2]}`;

console.log(myWatchedSeries);

// NO #3 : Console.log a sentence using both of the variables created above
console.log(`I watched ${watchedSeriesLength} series : ${myWatchedSeries}`);

/*********************************************************************************/

// Exercise 2 : Series
// PART 2

// NO #1 : Change the series “the big bang theory” to “friends”.
watchedSeries[2] = "friends";

console.log(watchedSeries);

// NO #2 : Add, at the end of the array, the name of another series you watched.
watchedSeries.push("Prison Break");

console.log(watchedSeries);

// NO #3 : Add, at the beginning of the array, the name of your favorite series.

watchedSeries.unshift("Game of Thrones");

console.log(watchedSeries);

// NO #4 : Delete the series “black mirror”.

watchedSeries.splice(1,1);

console.log(watchedSeries);

// NO #5 : Console.log the third letter of the series “money heist”.
console.log(watchedSeries[1][2]);

// NO #6 : Console.log the watchedSeries array.
console.log(watchedSeries);


/*********************************************************************************/

// Exercise 3 : The Temperature Converter

// NO #1 : Store a celsius temperature into a variable.

let temperature = 17;

// NO #2 : Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
console.log(`${temperature}°C is ${(temperature/5*9)+32}°F`)


/*********************************************************************************/

// Exercise 4 : Guess The Answers #1 

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: It will output 55, because 34 and 21 are numbers
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: It will output 23, because a now is equal to 2 and b is still 21 
// Actual: 23

// What is the value of c?
// Prediction: undefined. Cause we just declared c variable without store any value into.
// Actual: undefined.


//Analyse the code below, what will be the outcome? console.log(3 + 4 + '5');
// Prediction: 75. Cause 3 and 4 are numbers so : 3+4 = 7 and then the plus sign and char '5' so concate the 7 to 5 char. 
// Actual: 75.


/*********************************************************************************/

// Exercise 5 : Guess The Answers #2

typeof(15)
// Prediction: number. Cause 15 is a number.
// Actual: number.

typeof(5.5)
// Prediction: number. Cause 5.5 is a float number, but still consider as an number.
// Actual: number.

typeof(NaN)
// Prediction: number. Cause NaN is a number that is not a legal number.
// Actual: number.

typeof("hello")
// Prediction: string. Cause "hello" is a string.
// Actual: string.

typeof(true)
// Prediction: boolean. Cause "true" is one of the booleans options.
// Actual: boolean.

typeof(1 != 2)
// Prediction: boolean. Cause the result of 1!=2 is false, and it's a boolean type.
// Actual: boolean.

"hamburger" + "s"
// Prediction: hamburgers. Cause the result is a concatenation of 2 strings.
// Actual: hamburgers.

"hamburgers" - "s"
// Prediction: NaN. The result of string minus string is something that is not an number.  
// Actual: NaN.

"1" + "3"
// Prediction: 13. The result is a concatenation of 2 strings.
// Actual: 13.

"1" - "3"
// Prediction: -2. Because of the minus sign we consider the two chars as numbers.
// Actual: -2.

"johnny" + 5
// Prediction: johnny5.he starts to read it from left to right.
// in the left we have string and then plus sign, it means he has make concatenation of 2 strings.
// Actual: johnny5.

"johnny" - 5
// Prediction: NaN. The result of string minus number is something that is not an number. 
// Actual: NaN.

99 * "hello"
// Prediction: NaN. The result of number * string is something that is not an number. 
// Actual: NaN.

1 != 1
// Prediction: false. Cause this expression returns a boolean.
// Actual: false.

1 == "1"
// Prediction: true. Double "=" means make comparison between the values of both. and in this case the values are equal.
// Actual: true.

1 === "1"
// Prediction: false. Three times "=" means make comparison between the values and also the type of both.
// and in this case the values are equal, but the types no.
// Actual: false.


/*********************************************************************************/

// Exercise 6 : Guess The Answers #3

5 + "34"
// Prediction: 534. Because the plus sign and the string after, the result is a concatenation of 2 strings.
// Actual: 534

5 - "4"
// Prediction: 1. minus sign is undefined in string. Thay's why he considers to the value of "4".
// Actual: 1. 

10 % 5
// Prediction: 0. The rest results of division operation of 10 with 5 is 0.
// Actual: 0.

5 % 10
// Prediction: 5. The rest results of division operation of 5 with 10 is 5.
// Actual: 5.

"Java" + "Script"
// Prediction: JavaScript. The result is a concatenation of 2 strings.
// Cause plus sign is defined as concatenation in string types.
// Actual: JavaScript.

" " + " "
// Prediction:   (space). The result is a concatenation of 2 strings.
// The strings are space so he concates space to space.  
// Actual:    (space).

" " + 0
// Prediction: 0 (space before the 0). The result is a concatenation of 2 strings. 
// Actual: 0 (space before the 0).

true + true
// Prediction: 2. The value of true is 1. so 1+1 = 2.
// Actual: 2.

true + false
// Prediction: 1. The value of true is 1. The value of false is 0. so 1+0 = 1.
// Actual: 1.

false + true
// Prediction: 1. The value of true is 1. The value of false is 0. so 0+1 = 1.
// Actual: 1.

false - true
// Prediction: -1. The value of true is 1. The value of false is 0. so 0-1 = -1.
// Actual: -1.

!true
// Prediction: false. The opposite of true is false.
// Actual: false.

3 - 4
// Prediction: -1. Regular numbers expression. 
// Actual: -1.

"Bob" - "bill"
// Prediction: NaN. The minus sign is undefined operation between two strings.
// Actual: NaN.






