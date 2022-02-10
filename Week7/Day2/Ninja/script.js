

// Exercise 1 : Array To Object
const letters = ['x', 'y', 'z', 'z'];

// OPTION A
// Use a for loop to get this output { x: 1, y: 1, z: 2 };
const countOccurrencesA = (arr, valToCheck) => {
    
    let occurrences = 0;

    arr.forEach( currElement  => {

        valToCheck === currElement ? occurrences++ : occurrences = occurrences;

    });

    return occurrences;
}


let obj = {}; 

letters.forEach(element => {

    obj[element] = countOccurrencesA(letters, element);

});

console.log(obj);




// OPTION B
// Use the reduce() method to get this output { x: 1, y: 1, z: 2 };
const countOccurrences = (arr, valToCheck) => arr.reduce((a, v) => (v === valToCheck ? a + 1 : a), 0);

// acc it's the {} of the object and each iteration we add value to the new key by writing [curr] 
let res = letters.reduce((acc, curr) => (acc[curr]=countOccurrences(letters,curr), acc), {});

console.log(res);



// Exercise 2 : Let’s Play!
const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];


   // Create an array using map() that contains all the usernames from the gameInfo array,
   // add an exclamation point (ie. “!”) to the end of every username.
   let newArray = gameInfo.map(element => element.username + "!" );
   console.log(newArray);

   // Filter the gameInfo array to only include users who are on the red team
   let filterArray = gameInfo.filter(element => element.team === "red");
   console.log(filterArray);



   // Exercise 3: Dog Competition
const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];

// Use a loop to find the sum of all the dog’s ages in dog years.
let sum1 = 0;
data.forEach( element => sum1 += (element.age)*7 );
console.log(sum1);

// Using the reduce() method, find the sum of all the dog’s ages in dog years.
console.log( data.reduce((acc,curr)=> acc + curr.age*7 , 0) );

// Using the map() method, find the sum of all the dog’s ages in dog years.
let sum = 0;
data.map( element => sum += element.age*7 );
console.log(sum);

// Using the filter() method, find the sum of all the dog’s ages in dog years
let sum3 = 0;
data.filter( element => sum3 += element.age*7 );
console.log(sum3);



// Exercise 4 : Email
// Clean up this email to have no whitespaces. Do it in a single line (return a new string).
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '
let newStr = userEmail3.trim();
console.log(newStr);


// Exercise 5: Employees #3
let users = [   { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
                { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
                { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
                { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
                { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
                { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
                { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];


// Change the structure of the users array. The user’s full name should be the key and the user’s role should be the value.
// Example: { 'Bradley Bouley': 'Full Stack Resident' }
// Hint: Step one, create an empty object.
let newArr = [];

users.forEach( element => {

    let emptyObj = {};

    // Set new key+value to the empty obj
    emptyObj[element.firstName + " " + element.lastName] = element.role;

    newArr.push(emptyObj);
});

users = newArr;

console.log(users);
