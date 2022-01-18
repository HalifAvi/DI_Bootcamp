
// Exercise 1 : Information
//Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
const infoAboutMe = () => console.log("My name is Avi"); 
// Call the function.
infoAboutMe();

//Part II : function with three parameters
const infoAboutPerson = (personName, personAge, personFavoriteColor) => console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`); 

// Call the function.
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");                     



// Exercise 2 : Tips

// Create a function named calculateTip() that takes no parameter
// Inside the function, ask John for the amount of the bill
const calculateTip = () => {

    let billAmount =  parseInt(prompt("Hi John! Bon Appetit:) What is the bill amount?"));

    let options = [ billAmount < 50, 
                    billAmount >= 50 && billAmount <= 200,
                    billAmount > 200  
                  ];

    let tip = 0;
                  
    switch(options.indexOf(true)){

        case 0 : tip = billAmount*0.2;

            break;

        case 1 : tip = billAmount*0.15;

            break;

        case 2 : tip = billAmount*0.1;

            break;
    }

    // Console.log the tip amount and the final bill (bill + tip)
    console.log(`The tip amount is: ${tip} and the final bill is: ${billAmount+tip}`);
}

// Call the calculateTip() function
calculateTip();


// Exercise 3 : Find The Numbers Divisible By 23

const minNumRange = 0; 
const maxNumRange = 500;

//Create a function call isDivisible() that takes no parameter
const isDivisible = (divisor) => {

    let outcome = "";
    let sum = 0;

    //In the function, loop through numbers 0 to 500
    for(let num = minNumRange; num <= maxNumRange; num++){

        if(!(num % divisor)){

            outcome += num + " ";
            sum += num;
        }
    }

    console.log(`Outcome : ${outcome}`);
    console.log(`Sum : ${sum}`);
}

// Call the function
isDivisible(23);


// Exercise 4 : Shopping List
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”
let shoppingList = ["banana", "orange", "apple"];

// Create a function called myBill() that takes no parameters
// The function should return the total price of your shoppingList
const myBill = () => {

    let totalPrice = 0;

    for(let i=0; i<shoppingList.length;i++){

        // In case the fruit name doesn't exist in the stock so the if condition is (undefined > 0) and it's false
        if(stock[shoppingList[i]] > 0){     

            stock[shoppingList[i]]--;
            totalPrice += prices[shoppingList[i]];
        }
    }
    return totalPrice;
}

console.log(myBill());


// Exercise 5 : What’s In My Wallet ?

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

const quarters = 0.25;
const dimes = 0.10;
const nickel = 0.05;
const penny = 0.01;

const changeEnough = (itemPrice, amountOfChange) => {

    let generalChangeAmount = calculateGeneralChangeAmount(amountOfChange);

    return generalChangeAmount >= itemPrice;
}

// Return the general amount of change 
const calculateGeneralChangeAmount = changesArr => changesArr[0]*quarters + changesArr[1]*dimes +
                                                   changesArr[2]*nickel + changesArr[3]*penny;


// Call the function 
console.log(changeEnough(14.11, [2,100,0,0])); // false
console.log(changeEnough(0.75, [0,0,20,5])); // true





// Exercise 6 : Vacations Costs

// Define a function called hotelCost()

const hotelCost = () => {

    let numberOfNights = 0;
    const hotelCost = 140;


    // It should ask the user for the number of nights they would like to stay in the hotel
    // If the user doesn’t answer or if the answer is not a number, ask again
    do{
        // Convert user answer to integer
        numberOfNights = parseInt(prompt("Please insert number of nights you want to stay"));

    }while(Number.isNaN(numberOfNights) || numberOfNights < 0)

    return (numberOfNights*hotelCost)+'$'; // Return the total price in dollars
}

console.log(hotelCost());


/****************************************************************************************/

const firstDestination = "london";
const secondDestination = "paris";
const firstDestinationPrice = 183;
const secondDestinationPrice = 220;
const otherDestinationsPrice = 300;

// Define a function called planeRideCost()
const planeRideCost = () => {

    let destination = "";   

    do{
        
        // It should ask the user for their destination.
        destination = prompt("Please insert your destination");

    // If the user doesn’t answer or if the answer is not a string, ask again.
    }while(destination === "" || !(Number.isNaN(parseInt(destination))))

    return getPriceAccordingToDestination(destination.toLowerCase())+'$'; // Return the price according to the destination
}


// Recieve the destination and return the price
const getPriceAccordingToDestination = destination => {

    let price;

    switch(destination){

        case firstDestination: price = firstDestinationPrice;

            break;

        case secondDestination: price = secondDestinationPrice;

            break;

        default: price = otherDestinationsPrice;
    }

    return price;
}

console.log(planeRideCost());

/******************************************************************************************* */

// Define a function called rentalCarCost()
const rentalCarCost = () => {   

    const carPricePerDay = 40;
    const discountPercentage = 0.05; // discount of 5% 

    // It should ask the user for the number of days they would like to rent the car
    // If the user doesn’t answer or if the answer is not a number, ask again
    do{
        // Convert user answer to integer
        numberOfDays = parseInt(prompt("Please insert number of days to rent the car"));

    }while(Number.isNaN(numberOfDays) || numberOfDays < 0)

    let totalPrice = numberOfDays*carPricePerDay;

    // If the user rents a car for more than 10 days, they get a 5% discount
    if(numberOfDays > 10){
        totalPrice -= totalPrice*discountPercentage;
    }

    return totalPrice+'$';
}

console.log(rentalCarCost());

/**********************************************************************************************/

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation
// by calling the 3 functions that you created above

const totalVacationCost = () =>
console.log(`The car cost: ${rentalCarCost()}, the hotel cost: ${hotelCost()}, the plane tickets cost: ${planeRideCost()}`);

// Call the function 
totalVacationCost();

/**********************************************************************************************/



// Bonus: Instead of using a prompt inside the 3 first functions,
// only use a prompt inside the totalVacationCost() function.
// You need to change the 3 first functions, accordingly

const bonusExcHotelCost = (numberOfNights) => {

    const hotelCost = 140;

    return (numberOfNights*hotelCost)+'$'; // Return the total price in dollars
}

/****************************************************************************************/

const bonusExcPlaneRideCost = (destination) => {

    return getPriceAccordingToDestination(destination.toLowerCase())+'$'; // Return the price according to the destination
}

/******************************************************************************************* */

const bonusExcRentalCarCost = (numberOfDays) => {

    const carPricePerDay = 40;
    const discountPercentage = 0.05; // discount of 5% 

    let totalPrice = numberOfDays*carPricePerDay;

    // If the user rents a car for more than 10 days, they get a 5% discount
    if(numberOfDays > 10){
        totalPrice -= totalPrice*discountPercentage;
    }

    return totalPrice+'$';
}

/**********************************************************************************************/


const bonusExcTotalVacationCost = () => {

    do{
        // Convert user answer to integer
        numberOfNights = parseInt(prompt("Please insert number of nights you want to stay"));

    }while(Number.isNaN(numberOfNights) || numberOfNights < 0)

    let hotelCost = bonusExcHotelCost(numberOfNights);

      
    do{
        
        destination = prompt("Please insert your destination");

    // If the user doesn’t answer or if the answer is not a string, ask again.
    }while(destination === "" || !(Number.isNaN(parseInt(destination))))

    let rideCost = bonusExcPlaneRideCost(destination);


    do{
        // Convert user answer to integer
        numberOfDays = parseInt(prompt("Please insert number of days to rent the car"));

    }while(Number.isNaN(numberOfDays) || numberOfDays < 0)

    let carCost = bonusExcRentalCarCost(numberOfDays);

    console.log(`The car cost: ${carCost}, the hotel cost: ${hotelCost}, the plane tickets cost: ${rideCost}`);
}


// Call the function
bonusExcTotalVacationCost();