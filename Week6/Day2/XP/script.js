// Exercise 1 : Scope
// Analyse the code below, and predict what will be the value of a in all the following functions.

//#1 
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}

//#2 
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}


//#3 
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}

//#5 - prediction : we will see on scree twice alert messages with the number "5" each time
var a = 2;
if (true) { // This condition is always true so we will execute the code inside
    var a = 5; 
    alert(a); // The 'a' value he recognizes here is the 'var a=5' into the if sope so we will see an alert message with '5'.
}
alert(a); // The 'a' value he recognizes here is the 'var a=2' in the global scope that was changed to 'var a = 5' 
          // So we will see an alert message with '5' again
          // All the code above that is inside functions is Irrelevant cause we don't call to these functions
          // And the code above '#5' that outside the function's scope is Irrelevant too cause it's just change 'a' 
          // and we have last change of 'a' in section #5 so the 'a' value determined by row 44 to '5' value 




// Exercise 2 : Ternary Operator
function winBattle(){
    return true;
}


// Transform the winBattle() function to an arrow function
winBattle = () => true;

// Create a variable called experiencePoints
let experiencePoints;

// Assign to this variable, a ternary operator. If winBattle() is true,
// the experiencePoints variable should be equal to 10,
// else the variable should be equal to 1

winBattle() ? experiencePoints = 10 : experiencePoints = 1;

// Console.log the experiencePoints variable.
console.log(experiencePoints);


// Exercise 3 : Is It A String ?
// Write a JavaScript arrow function that checks whether the value of the argument passed,
// is a string or not. Use ternary operator

let isString = testInput => typeof(testInput) === 'string' ? true : false ; 

console.log(isString('hello'));
console.log(isString([1, 2, 4, 0]));

// Exercise 4 : Colors
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Write a JavaScript program that displays the colors in the following order :
// “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

colors.forEach( (element, idx) => console.log(`${idx+1}# choise is ${element}.`));


// Check if at least one element of the array is equal to the value “Violet”.
// If yes, console.log("Yeah"), else console.log("No...")

colors.some(element => element === 'Violet') ? console.log('Yeah') : console.log('No...')


// Exercise 5 : Colors #2
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

// Write a JavaScript program that displays the colors in the following order
// : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…

let displaysTheColors = () => {

    color.forEach( (element, idx) => {

        let order;
    
        switch(idx) {
    
            case 0: order =  ordinal[1];
                break;
    
            case 1: order =  ordinal[2];
                break;
    
            case 2: order =  ordinal[3];
                break;
    
            default: order =  ordinal[0];
        }
    
            console.log(`${idx+1}${order} choise is ${element}`);
    });
} 

displaysTheColors();


// Exercise 6 : Bank Details
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// 1. Create a global variable called bankAmount which value is the amount of money currently in your account.
let bankAmount = 57000000;

// 2. Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
const vat = 0.17;

// 3. Create an array with all your monthly expenses, both positive and negative (money made and money spent).
let details = ["+200", "-100", "+146", "+167", "-2900"];

// 4. Create a program that modifies the expenses (ie. the positive AND the negative expenses)
// so that they will include taxes (multiply each expense by the VAT).

details.forEach( (element, idx, details) => {

    let integerValue = parseInt(element);

   details[idx] = integerValue + integerValue*vat;
});


console.log(details);

// Display your current bankAccount standing at the end of the month.
const reducer = (accumulator, curr) => accumulator + curr;
console.log(bankAmount + details.reduce(reducer));



