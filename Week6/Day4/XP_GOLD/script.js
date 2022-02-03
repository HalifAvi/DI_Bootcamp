

// Exercise 1 : Nested Functions
// Change the code below to nested arrow functions.

let landscape = () => {

    let result = "";
   
    let flat = x => {

      for(let count = 0; count<x; count++){
        result = result + "_";
      }
    }
   
    let mountain = x => {
      result = result + "/"
      for(let counter = 0; counter<x; counter++){
        result = result + "'"
      }
      result = result + "\\"
    }
 
    flat(4);
    mountain(4);
    flat(4)
   
    return result;
   }
   
console.log(landscape())    //   ____/''''\____




// Exercise 2 : Closure
// Analyse the code below, and before executing it, predict the outcome of the last line.
// const addTo = x => y => x + y;
// let addToTen = addTo(10);
// console.log( addToTen(3) ); // 13


// Exercise 3 : Currying
// Analyse the code below, and before executing it, predict the outcome of the last line.
//const sum = (a, b) => a + b
//const curriedSum = (a) => (b) => a + b

//console.log( curriedSum(30)(1) ) // 31

// Exercise 4 : Currying
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// console.log( add5(12) ) // 17


// Exercise 5 : Composing
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
console.log( compose(add1, add5)(10) ) // 16







