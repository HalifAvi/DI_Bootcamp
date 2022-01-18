

// HERE ARE ALL THE FUNCTIONS

// Return an array of words according the user sentence
const getSentenceFromUser = () => {

    let userSentence = "";

    do{
        // Prompt the user for several words (separated by commas)
        userSentence = prompt("Please enter a sentence separated by commas");

    }while(!isWordsWithCommas(userSentence)) // Make sure the input is a correct pattern

    return convertStringToArray(userSentence); // Calling to function 
}

// Recieve a string to check if contains words separate by commas
const isWordsWithCommas = (sentenceToCheck) => {

    let regExp =  /^\w+(,\w+)*$/;   // \w = a to z, A to Z, 0 to 9

    if(regExp.test(sentenceToCheck)){

		return true;
    }
    else{

	return false;
}
}

// Return an array of words according the user sentence split by comma
// Put the words into an array (The opposite from 'join')
const convertStringToArray = sentence => sentence.split(","); 
   

// Recieve words array and print it in stars frame
const printSentenceInTheStars = array => {

        let rectWidth = calculateRectangleWidth(array); // calling to function to know the width of the frame

        printTheTopOrBttRow(rectWidth); // print the first row

        printAllRowsWithWords(array, rectWidth) // print all rows with words

        printTheTopOrBttRow(rectWidth); // print the bottom row
 }

 // Recieve the words array and return the width of the frame (equals to the longest word in the array + addingStars const variable)
 const calculateRectangleWidth = array => {

    let longestWord = array[0].length;

    for(let i=1; i<array.length; i++){

        if(array[i].length > longestWord){

            longestWord = array[i].length;
        }
    }

    return longestWord + addingStars; // Using the defined const variable from the global scope
 }

 // Recieve the width of the frame and print according to that row of stars
 const printTheTopOrBttRow = sizeOfRow => {

    let lineToPrint = "";

    for(let i=0; i<sizeOfRow; i++){

        lineToPrint += "*";
    }

    console.log(lineToPrint);
 }

// Recieve the words array and the width of frame and print the all rows inside the stars frame
 const printAllRowsWithWords = (array, rectWidth) => {

    for(let i=0; i<array.length; i++){

        printSingleRowWithWord(array, i, rectWidth); // Calling to function to print a single row
    }
 }

 // Recieve the words array, width of frame and the specific word index and print the row 
 const printSingleRowWithWord = (array, wordIndexInArray, rectWidth) => {

    let lineToPrint = `* ${array[wordIndexInArray]}`;

    lineToPrint = addSpaceFromWordToLastStar(rectWidth, lineToPrint); // Calling to function to add spaces from end of word to the stars frame

    console.log(lineToPrint);
 }

 // Recieve the string to print and the width of frame and return the complete row to print (with spaces to the frame)
 const addSpaceFromWordToLastStar = (rectWidth, lineToPrint) => {

    let howManySpaceToLastStar =  rectWidth - lineToPrint.length;

    for(let i=0; i<howManySpaceToLastStar-1; i++){

        lineToPrint += " ";
    }

    return lineToPrint + "*";
 }

/************************************************************************************** */
 //HERE IS THE GLOBAL SCOPE

// Const variable : amount of stars adding to the longest word in sentence
const addingStars = 4;

let sentenceInArray = getSentenceFromUser();

printSentenceInTheStars(sentenceInArray);

