

// Exercise 1 : Analyzing The Map Method

console.log( [1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return ;
  }) )   // [2,4,6]



  // Exercise 2: Analyzing The Reduce Method

  console.log( [[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  ) )

  // [ 1, 2, 0, 1, 2, 3 ]


  // Exercise 3 : Analyze This Code

  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

console.log(newArray); // If we don't make concole.log it will be the same just without display the array after multiply 

// 1, 0
// alert - 1
// 2, 1
// alert 2
// .............

// In the end : [2,4,8,10,16,18]


// Exercise 4 : Nested Arrays

// Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].
// Bonus Try to do it on one line.

const array = [[1],[2],[3],[[[4]]],[[[5]]]];

let modifyArr = array => array.flat(2);
// return new array


console.log( modifyArr(array) );



// Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"],
// ["learning", "fast!"]]; and modify it to look like this array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ].

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

let modifyArr2 = arr => arr.map(element => element.join(" "));

let greetingArr = modifyArr2(greeting);

// Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’
console.log( greetingArr.join(" ") );

// Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

console.log( trapped.flat(Infinity) );