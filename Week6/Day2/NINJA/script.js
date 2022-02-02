
// Exercise 1 : Menu

let menu = [
    {
      type : "starter",
      name : "Houmous with Pita"
    },
    {
      type : "starter",
      name : "Vegetable Soup with Houmous peas"
    },
    {
      type : "dessert",
      name : "Chocolate Cake"
    }
  ]

// Using an array method and ternary operator, check if at least one element in the menu array is a dessert.
  console.log( menu.some( element => element.type === "dessert") );


  // Using an array method, check if all the elements in the array are starters.
  console.log( menu.every( element => element.type === "starter") );


  // Using an array method, check if there is at least one element in the array that is a main course.
  // If not, add a main course of your choice to the array.

  if(!(menu.some( element => element.type === "main"))){

    menu.push( 
        {    
            type : "main",
            name : "Pizza"
        }
    );
  }

  console.log(menu);


  // Using an array method, add a key “vegetarian” (a boolean) to the menu array.
  // The value of the key should be true if the name of the course contains at least
  // one element from the vegetarian array.

  let vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]

  // In case we want to check is the whole course name is the same excactlly 
//     menu.some( element => { vegetarian.includes(element.name)  ? 

//     element.vegetarian = true

//     :

//     element.vegetarian = false

//     });

//   console.log(menu);




  //In case we want to check is the whole course name contains one of the array names



  // Arr.some((value)=> { ....value... });    <------> if at least one value is make the condition true.
  // The condition is inside the { ....... }   <-----> The condition : Is 'course name' contains one of the array names?
  //vegetarian.some(vegetarianStr => ("Houmous with Pita").toLowerCase().includes(vegetarianStr))

menu.forEach(element => {


    element.vegetarian = vegetarian.some(vegetarianStr => (element.name).toLowerCase().includes(vegetarianStr));
 
});




// Exercise 2 : Chop Into Chunks

// Write a JavaScript function that takes 2 parameters: a string and a number.
// The function should chop the string into chunks of your chosen length (the second parameter),
// and the outcome should be represented in an array.

let stringChop = (str, size) => {

    let arr = str.match(new RegExp('.{1,' + size + '}', 'g'));

    return arr;
}


console.log(stringChop('developers',2)); 



// Exercise 3 : You Said String ?
// Write a JavaScript function to find a word within a string.

let searchWord = (str, word) => {

    // Convert to array
    let arr = str.split(' ');
    let counter = 0;
    let idxToStart = 0;

    while(idxToStart < arr.length){

        let idxOfWordInArr = arr.indexOf(word, idxToStart);

        if( idxOfWordInArr !== -1){

            idxToStart = idxOfWordInArr;
            counter++;
        }

        idxToStart++;
    }

    return `${word} was found ${counter} times`;
}


console.log(searchWord('fox The fox quick fox brown fox', 'fox')); 
// "'fox' was found 1 times." 




    



      
    
    

