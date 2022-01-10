
// Exercise 1 :

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift(); // #NO 1 : Delete the first array cell ("Banana") - change the origin array

console.log(fruits);

fruits.sort(); // #NO 2 : Sort the array in alphabetical order

console.log(fruits);

fruits.push("Kiwi"); // #NO 3 : Add “Kiwi” to the end of the array.

console.log(fruits);

fruits.splice(0, 1); // #NO 4 : Delete the first array cell ("Apples").

console.log(fruits);

fruits.reverse(); // #NO 5 : Sort the array in reverse order.

console.log(fruits);


// Exercise 2 :

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits[1][1][0]); // Access and then console.log “Oranges”.


