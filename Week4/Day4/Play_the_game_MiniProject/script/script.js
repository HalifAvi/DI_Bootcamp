
// Const variables for the whole program scope
const minNumRange = 0;
const maxNumRange = 10;
const maxGuessNum = 2; // Up to 3 guesses

// General variable
let numOfGuess = 0;
let newGame = true;
let firstTest = true;


let playTheGame = () => {

    if(newGame){ // In case of new game - Ask user if he want to start the game

        newGame = false;

        if( isUserWantToStartTheGame() ){ // In case the user want to start the game

            getNumberFromUserAndRandomAndTestBoth();
        }
    }
    else{ // In case the user have to pick a new valid number

        getNumberFromUserAndRandomAndTestBoth();
    }
}

const getNumberFromUserAndRandomAndTestBoth = () => {

    let numberFromUser = getNumberFromUser();

    if( numberFromUser !== "Nan"){ // If the user input is a valid number continue the program

        let computerNumber = getRandomNumber(); // Get a random number from computer

        testTwoNumbers(numberFromUser, computerNumber); // Check if the user guess the right number
    }
}

// Return true if the user want to play the game or false and pop an alert message if not
const isUserWantToStartTheGame = () => {

    let answer = false;

    if(confirm("Hellooooooooooooo :) Do you want to play the game?")){

        answer = true;
    }
    else{

        alert("No problem, Goodbye!");      
    }

    return answer;
}

// Return a number from user in a specific range
const getNumberFromUser = () => {

    let userInput = prompt(`Please enter a number between ${minNumRange} to ${maxNumRange}`);

    if (isValidNumber(userInput)){
 
        return parseInt(userInput); // If the input is a valid number return the Integer number
    }

    return "Nan"; // If the input is invalid return 'Nan'
}

// Return true if the number is valid (According to some conditions) or false if not
const isValidNumber = number => {

    let answer = false;

    // Parse the input to Integer type before checking the value of number
    if(isInputContainDigitsOnly(number) && isNumberIntoASpecificRange(parseInt(number))){

        answer = true;
    }

    return answer;
}

// Return true if the input is a number, false if not
const isInputContainDigitsOnly = inputToCheck => {

    let answer = false;
    let regExp =  /^(\d)+$/;   // At least one *digit* (No spaces ro other chars) or more

    if(regExp.test(inputToCheck)){

        answer = true;
    }
    else{

        alert("Sorry Not a number, Try again!");
        playTheGame();
    }

    return answer;
}

// Return true if the number into the range, false if not
const isNumberIntoASpecificRange = number => {

    let answer = false;

    if(number >= minNumRange && number <= maxNumRange){

        answer = true;
    }
    else{

        alert("Sorry it's not a good number, Try again!");
        playTheGame();
    }

    return answer;
}

const getRandomNumber = () => {

    return Math.floor(Math.random() * 10) + 1; // 0-10
}

const testTwoNumbers = (userNumber, computerNumber) => {

    let optionsArr = [ userNumber === computerNumber,
                       userNumber > computerNumber,
                       userNumber < computerNumber    ];

    if(numOfGuess !== maxGuessNum){ // If the user have less than the const maxGuessNum variable value - continue

        switch(optionsArr.indexOf(true)){

            case 0: alert("WINNER! ! ! ! ! !"); 
                break;
    
            case 1: alert("Your number is bigger then the computer's, guess again!");
                    numOfGuess++; // Increase the guesses counter
                    reAskAndTestUserNumberGuess(computerNumber);
                break;
    
            case 2: alert("Your number is smaller then the computer's, guess again!");
                    numOfGuess++; // Increase the guesses counter
                    reAskAndTestUserNumberGuess(computerNumber);
                break;
        }
    }
    else{ // If the user already reach to max number of guesses - alert and STOP!

        if(firstTest){

            firstTest = false;
            alert("out of chances");
        }
    }
}

// Ask and test again the user number
const reAskAndTestUserNumberGuess = (computerNumber) => {

    testTwoNumbers(getNumberFromUser(), computerNumber);
}
