
// Exercise 1 : Find The Sum
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

let sum = (num1, num2) => num1+num2;

console.log(sum(1,2));



// Exercise 2 : Kg And Grams
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it
function convertKgToGrams1 (weightInKg) {

    return weightInKg*1000;
  };

console.log(convertKgToGrams1(1));


// Then, use function expression and invoke it
let convertKgToGrams2 = function(weightInKg) {
    return weightInKg*1000;
  };

  console.log(convertKgToGrams2(1));


// Write in a one line comment, the difference between function declaration and function expression.
// function declaration is a named function and the function expression is an anonymous function (no named function) 



// Finally, use a one line arrow function and invoke it.
let convertKgToGrams3 = weightInKg => weightInKg*1000;

console.log(convertKgToGrams3(1));


// Exercise 3 : Fortune Teller
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>,
// and married to <partner's name> with <number of children> kids."
(function (numOfChildren, partnerName, geographicLocation, jobTitle) {

    // let mainSection = document.querySelector('#mainSection');
    // mainSection.innerHTML = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numOfChildren} kids.`;
    
  }(5, "Ran", "Tel-Aviv", "Programmer"));



  // Exercise 4 : Welcome
  // Create a Bootstrap Navbar in your HTML file.
  // John has just signed in to your website and you want to welcome him.
  // In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
  // The function should add a div in the nabvar, displaying the name of the user and his profile picture.

  (function (userName) {

    let img = document.createElement('img');
    img.setAttribute('src','1.jpeg');
    img.setAttribute('id','image');
    

    let div = document.createElement('div');
    let txtNode = document.createTextNode(`Welcome ${userName}`);
    div.appendChild(txtNode);
    div.appendChild(img);
    

    let whereToAppend = document.querySelector('#col2');
    whereToAppend.appendChild(div);

  }("Avi"));


  // Exercise 5 : Juice Bar

  // Part I:

  // The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
    // The inner function named addIngredients receives 3 ingredients,
    // and displays on the DOM a sentence like The client wants a <size drink> juice,
    // containing <first ingredient>, <second ingredient>, <third ingredient>".

  function makeJuice (beverageSize) {


    // Part II:
    // In the makeJuice function, create an empty array named ingredients.
    let ingredients = [];

    function addIngredients ( firstIngredient, secondIngredient, thirdIngredient ) {

        let txtNode2 = document.createTextNode(`The client wants a ${beverageSize} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`)
        let whereToAppend = document.querySelector('#col2');
        whereToAppend.appendChild(txtNode2);

        // Part 2
        // The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
        ingredients.push(firstIngredient);
        ingredients.push(secondIngredient);
        ingredients.push(thirdIngredient);

        // Create a new inner function named displayJuice that displays on the DOM a sentence 
        // Use the forEach method.

        function displayJuice () {

            let sentence = `    The client wants a ${beverageSize} juice, containing  `;
            ingredients.forEach( element => sentence += `${element}, `)

            let txtNode3 = document.createTextNode(sentence);
            whereToAppend.appendChild(txtNode3);

        }

        displayJuice ();
    } 

    //Invoke the inner function ONCE inside the outer function.
    addIngredients("a","b","c");
  }


// Then invoke the outer function in the global scope.
makeJuice(1);



