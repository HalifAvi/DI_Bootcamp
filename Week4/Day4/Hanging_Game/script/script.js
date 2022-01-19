
// Define const variables
const maxNumOfGuesses = 10;
const minLettersInWord = 8;
const mainPlayer = 1;
const guessPlayer = 2;


// Define a players array 
let playersArr = [

    player1 = {

        name: 'unknown',
        numberOfGuesses: maxNumOfGuesses,
        word: '',
        hiddenWord: '',
        guessesList: []
    },
    
    player2 = {
    
        name: 'unknown',
        numberOfGuesses: maxNumOfGuesses,
        word: '',
        hiddenWord: '',
        guessesList: []
    }
];


// Starting to play the game
const playHangingGame = () => {

    // Update the names of the players inside the obj according to the input
    askForPlayerName(mainPlayer);
    askForPlayerName(guessPlayer);

    // Ask for starting word to guess from the first player and update in his player obj 
    getStartingWordFromPlayer(mainPlayer);

    // Print the hidden word with astriskes
    displayTheHiddenWord(guessPlayer);

    // Ask for a letter in case the user still remains guesses and also does not descover the hidden word
    while( (playersArr[guessPlayer-1].hiddenWord).indexOf('*') !== -1 &&
            playersArr[guessPlayer-1].numberOfGuesses !== 0) {

        // Asking continuously from second player for letters
        startGuessingLetters(guessPlayer);
    }

    checkAndPrintWhoIsTheWinner();
}

// Check and print who is the winner player
const checkAndPrintWhoIsTheWinner = () => {

    if((playersArr[guessPlayer-1].hiddenWord).indexOf('*') === -1){

        console.log(`CONGRATS ${playersArr[guessPlayer-1].name}!!! YOU WIN :)))))))))`);
    }
    else{

        console.log(`${playersArr[guessPlayer-1].name}!!! YOU LOSE:(`);
    }
}


// Recieve the play number and update his name into the ralevent player obj
const askForPlayerName = playerNo => {

    let playerName;
    let player = "player" + playerNo; // Concate the number of player you want
    let regExp = /^\w+$/;

    do{

        playerName = prompt(`Hi ${player}! Please enter your name : `);
    
    }while(!regExp.test(playerName)) // A valid username is string with letters\digits

    // It's an object *ARRAY* so the second is an *INDEX* in the array
    playersArr[playerNo-1].name = playerName; // Update the name property of the player obj
} 


// Recieve player number and update his word property with valid input
const getStartingWordFromPlayer = playerNo => {

let userWord;
let regExp = /^[a-zA-Z]{8,}$/; // Contains at least 8 letters

do{

    userWord = prompt(`Hi ${playersArr[playerNo-1].name}! Please insert a word to start the game (min 8 charecters)`);

}while(!regExp.test(userWord))

playersArr[playerNo-1].word = userWord; // Update the word property of the player obj

// Update the hidden word property of the second player
playersArr[playerNo].hiddenWord = '*'.repeat(playersArr[playerNo-1].word.length);

}


// Recieve the player number and update and print the hidden word property of the 
const displayTheHiddenWord = playerNo => {

    console.log(`The hidden word is : ${playersArr[playerNo-1].hiddenWord}`);
}

// This function askes from the user to enter a letter
const startGuessingLetters = playerNo => {

    let userLetter;

    do{

        letter = prompt(`Hi ${playersArr[playerNo-1].name}, Please guess a letter : (You remain ${playersArr[playerNo-1].numberOfGuesses} times to guesses)`);
    
    }while( !(isLetter(letter)) || isAlreadyGuessed(letter,playerNo)) // A valid letter is a letter that the user enter for the first time

    let letterPositions = getIndexesArrayWithAllLetterPositions(letter, playerNo);


    if(isLetterInsideWord(letterPositions)){

        replaceAstriskesWithLettersInHiddenWord(letterPositions);
        displayTheHiddenWord(guessPlayer);
    }
}

// Recieve the array letter positions and change the hidden word according to
const replaceAstriskesWithLettersInHiddenWord = letterPositions => {

    for(let i=0; i<letterPositions.length; i++){

        // Convert the hidden word to array for using the splice after
        let stringToArray = (playersArr[guessPlayer-1].hiddenWord).split("");
        // Replace the astrisk in the specific position according to the index we stored before
        stringToArray.splice(letterPositions[i],1,playersArr[mainPlayer-1].word[letterPositions[i]]);
        // Assign the hidden word (string type) to the property of the object
        playersArr[guessPlayer-1].hiddenWord = stringToArray.join('');
    }
}

// Return true if the letter exsists into the hidden word
const isLetterInsideWord = letterPositions =>{

    let exsist = false;

    if(letterPositions.length !== 0){ // If the array is not empty

        exsist = true;
    }
    
    return exsist;
}

// Return true if the user entered a single letter
const isLetter = letter => {

    let isLetter = false;
    let regExp = /^[a-zA-Z]{1}$/; // Contains only one letter

    if(regExp.test(letter)){ // If it's a letter

        isLetter = true;
    }
    else{

        isLetter = false;
        alert("It's not a letter!!!");
    }
    
    return isLetter;
}

// Return true in case the user already guessed this letter before
const isAlreadyGuessed = (letter, playerNo) => {

    let isExist = false;

    if((playersArr[playerNo-1].guessesList).indexOf(letter) !== -1){ // If the user already guessed this letter

        isExist = true;
        alert('You already guessed this letter, try to guess other!');
    }
    else{

        playersArr[playerNo-1].guessesList.push(letter); // Insert the new guess letter to the list 
        playersArr[playerNo-1].numberOfGuesses--; // Decrease 1 from number of guesses
        isExist = false;
        printThePreviousGuesses(playerNo);
    }
    
    return isExist;
}


// Print the all previous guesses of the user
const printThePreviousGuesses = playerNo => {

    console.log(`Your previous guesses are : ${playersArr[playerNo-1].guessesList}`);
}

const getIndexesArrayWithAllLetterPositions = (letter, playerNo) =>{

    const indexesTheLetterExsistsInWord = [];

    for (let index = 0; index < playersArr[playerNo-2].word.length; index++) {

      if (playersArr[playerNo-2].word[index] === letter) {

        indexesTheLetterExsistsInWord.push(index);
      }
    }

    return indexesTheLetterExsistsInWord;
}



/**********************************************************************************************/

// Call function to start the game
playHangingGame();




