

// 1rst Daily Challenge

// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument

const makeAllCaps = wordsArr => {

    return new Promise((resolve, reject) => {

        if( wordsArr.every(element => typeof element === "string")){

            resolve(wordsArr.map( str => str.toUpperCase()));

        } else {

            reject("Not all the words in the array are strings !!!")
        }
    });
};

  // The second function called sortWords(), takes an array of words uppercased as an argument
  const sortWords = wordsArr => {

    return new Promise((resolve, reject) => {

        if( wordsArr.length > 4 ){

            resolve(wordsArr.sort());

        } else {

            reject("The array length is smaller than 4 !!!")
        }
    });
};

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))


//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))


//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))





// 2nd Daily Challenge
let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

 // Create three functions. The two first functions should return a promise
 // The first function is named toJs():
 // this function converts the morse json string provided above to a morse javascript object.
 // if the morse javascript object is empty, throw an error (use reject)
 // else return the morse javascript object (use resolve)

 const toJs = morseJsonStr => {

    return new Promise((resolve, reject) => {

        let morseObj = JSON.parse(morseJsonStr);

        if( Object.keys(morseObj).length > 0 ){

            resolve(morseObj);

        } else {

            reject("Morse javascript object is empty !!!")
        }
    });
};



// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
const getMourseArray = (morseJsonObj, inputArr) => inputArr.map( inputChar => morseJsonObj[inputChar]);

const toMorse = morseJsonObj => {

    return new Promise((resolve, reject) => {

    let userInput = prompt("please enter a word or a sentence");

    let strToArrNoSpaces = (userInput.split("")).filter(function(entry) { return entry.trim() != ''; });

    if (strToArrNoSpaces !== "" && (strToArrNoSpaces).every(element => (Object.keys(morseJsonObj ).includes(element)))) {

        resolve(getMourseArray(morseJsonObj, strToArrNoSpaces));

    } else {

        reject("You entered a character that doesn't exist in the morse");
    }
    });
};



// The third function called joinWords(morseTranslation), takes one argument:
// the morse translation array * this function joins the morse translation by using line break and display it on the page
// (ie. On the DOM)
const joinWords = morseTranslation => {

    let whereToAppend = document.body;

    morseTranslation.forEach(element => {

        let newP = document.createElement('p');
        newP.textContent = element;
        newP.style.fontSize = "50px";
        whereToAppend.appendChild(newP);
    });
}



toJs(morse)
    .then((res) => toMorse(res))
    .then((res) => joinWords(res))
    .catch((res) => console.log(res))



