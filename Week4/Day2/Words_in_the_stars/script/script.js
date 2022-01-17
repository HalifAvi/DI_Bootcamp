
//HERE IS THE GLOBAL SCOPE

// Const variable : amount of stars adding to the longest word in sentence
const addingStars = 4;

let sentenceInArray = getSentenceFromUser();

printSentenceInTheStars(sentenceInArray);


// HERE ARE ALL THE FUNCTIONS

// Return an array of words according the user sentence
function getSentenceFromUser(){

    // Prompt the user for several words (separated by commas)
    let userSentence = prompt("Please enter a sentence separated by commas");

    return convertStringToArray(userSentence); // Calling to function 
}

// Return an array of words according the user sentence split by comma
function convertStringToArray(sentence){

   // Put the words into an array (The opposite from 'join')
   return sentence.split(",");  
}

// Recieve words array and print it in stars frame
function printSentenceInTheStars(array){

        let rectWidth = calculateRectangleWidth(array); // calling to function to know the width of the frame

        printTheTopOrBttRow(rectWidth); // print the first row

        printAllRowsWithWords(array, rectWidth) // print all rows with words

        printTheTopOrBttRow(rectWidth); // print the bottom row
 }

 // Recieve the words array and return the width of the frame (equals to the longest word in the array + addingStars const variable)
 function calculateRectangleWidth(array){

    let longestWord = array[0].length;

    for(let i=1; i<array.length; i++){

        if(array[i].length > longestWord){

            longestWord = array[i].length;
        }
    }

    return longestWord + addingStars; // Using the defined const variable from the global scope
 }

 // Recieve the width of the frame and print according to that row of stars
 function printTheTopOrBttRow(sizeOfRow){

    let lineToPrint = "";

    for(let i=0; i<sizeOfRow; i++){

        lineToPrint += "*";
    }

    console.log(lineToPrint);
 }

// Recieve the words array and the width of frame and print the all rows inside the stars frame
 function printAllRowsWithWords(array, rectWidth){

    for(let i=0; i<array.length; i++){

        printSingleRowWithWord(array, i, rectWidth); // Calling to function to print a single row
    }
 }

 // Recieve the words array, width of frame and the specific word index and print the row 
 function printSingleRowWithWord(array, wordIndexInArray, rectWidth){

    let lineToPrint = `* ${array[wordIndexInArray]}`;

    lineToPrint = addSpaceFromWordToLastStar(rectWidth, lineToPrint); // Calling to function to add spaces from end of word to the stars frame

    console.log(lineToPrint);
 }

 // Recieve the string to print and the width of frame and return the complete row to print (with spaces to the frame)
 function addSpaceFromWordToLastStar(rectWidth, lineToPrint){

    let howManySpaceToLastStar =  rectWidth - lineToPrint.length;

    for(let i=0; i<howManySpaceToLastStar-1; i++){

        lineToPrint += " ";
    }

    return lineToPrint + "*";
 }