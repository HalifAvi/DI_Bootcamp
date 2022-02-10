
// Exercise 1 : Print Full Name

// Create a function called printFullName(studentObj) that accepts an object as a parameter.
// For example : printFullName({first: 'Elie', last:'Schoppik'}).
// The function should return a string like the example below

let printFullName = ({first, last}) => `Your full name is ${first} ${last}`;

console.log( printFullName({first: 'Elie', last:'Schoppik'}) ); 
// 'Your full name is Elie Schoppik`



// Exercise 2 : Keys And Values
// Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order.

// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]


let getKeysAndValuesSeparatly = obj => {

    let sortedObject = sortTheObject(obj);

    let keysArray = Object.keys(sortedObject);
    let valuesArray = Object.values(sortedObject);

    return [keysArray, valuesArray];
}


    // make reduce to sort keys array = we need to put the right value to key
const sortTheObject = unsortedWholeObj => Object.keys(unsortedWholeObj).sort().reduce((currStatusOfNewObj, sortedKey) =>

(currStatusOfNewObj[sortedKey] = unsortedWholeObj[sortedKey], currStatusOfNewObj), {});



console.log( getKeysAndValuesSeparatly({ b: 2, c: 3,a: 1 }) );
console.log( getKeysAndValuesSeparatly({ b: "Microsoft", a: "Apple", c: "Google" }) );
console.log( getKeysAndValuesSeparatly({ key3: undefined, key2: false, key1: true }) );


// Exercise 3 : Counter Class
class Counter {
    constructor() {
      this.count = 0;
    }
  
    increment() {
      this.count++;
    }
  }
  
  const counterOne = new Counter();
  counterOne.increment(); // counterOne.counter = 1
  counterOne.increment(); // counterOne.counter = 2
  
  const counterTwo = counterOne; // Deep clone - the same address
  counterTwo.increment(); // counterTwo.counter = counterOne.counter = 3
  
  console.log(counterOne.count);  // 3 

