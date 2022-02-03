
// Exercise 1 : Merge Words

// Create a function such as mergeWords('Hello')() that returns the following string: 'Hello'

function mergeWords(string) {

    return function(nextString) {

      if (nextString === undefined) {
        return string;
      } else {
        return mergeWords(string + ' ' + nextString);
      }

    }

  }

console.log( mergeWords("Hello")() );

console.log( mergeWords('There')('is')('no')('spoon.')() );



// const mergeWords = string => nextString =>
//   nextString === undefined ? 
//   string : 
//   mergeWords(`${string} ${nextString}`);








// function outside(x) {

//     function inside(y) {
//       return x + y;
//     }
//     return inside;
//   }

//   fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
//                           // it
//   result = fn_inside(5); // returns 8
  
//   result1 = outside(3)(5); // returns 8

//   console.log(result1)