

/****************************GLOBAL VARIABLES*****************************************/
let idQuote = 0;
let currentQuote;
let clickedLike = true;
let randomQuoteID;
let prevQuoteID = randomQuoteID;
let fstBttTxtContent = "HOW MANY CHARECTERS WITH SPACES"; 
let scdBttTxtContent = "HOW MANY CHARECTERS NO SPACES"; 
let trdBttTxtContent = "HOW MANY WORDS"; 
let howCharsWithSpaces;
let howCharsNoSpaces;
let inputChanged = true;
let allAuthorQuotesArr = [];
let currentQupteDisplayedIndex = 0;
let writeBeforeThis = document.querySelector('h3');
let parent = document.querySelector('#searchAuthorForm');
let prevQuoteBtt = document.querySelector("#prevQuoteBtt");
let nextQuoteBtt = document.querySelector("#nextQuoteBtt");
let authorNameInput = document.querySelector('#authorNameToSearch');
let generateBtt = document.querySelector("button#generateQuoteBtt");
let addQuoteBtt = document.querySelector("button#addQuoteBtt");
let numOfCharsWithSpaceBtt = document.querySelector("button#numOfCharsWithSpaceBtt");
let numOfCharsNoSpaceBtt = document.querySelector("button#numOfCharsNoSpaceBtt");
let numOfWordsBtt = document.querySelector("button#numOfWordsBtt");
let likeIcon = document.querySelector("ion-icon");
let searchAuthorBtt = document.querySelector("#searchAuthorBtt");
let whereToWrite = document.createElement('p');
    whereToWrite.classList.add('quoteToDisplayStyle');



/****************************QUOTES ARRAY DEFINITION*****************************************/
const quotesArr = [

    {
        id: idQuote++,
        author: "Dan-Emmanuel Azoulay",
        quote: "All roads lead to Rome.",
        likes: 3
    },

    {
        id: idQuote++,
        author: "Walt Disney",
        quote: "The way to get started is to quit talking and begin doing.",
        likes: 0
    },

    {
        id: idQuote++,
        author: "John Lennon",
        quote: "Life is what happens when you're busy making other plans.",
        likes: 10
    }
]



/****************************FUNCTION DEFINITIONS*****************************************/


let changeQuote = () => {

    resetBtts();

    clickedLike = true;

    while(prevQuoteID === randomQuoteID){

        // Returns a random integer from 0 to quotesArr.length-1:
        randomQuoteID = Math.floor(Math.random() * quotesArr.length);
    }

    currentQuote = quotesArr[randomQuoteID].quote;
    currentAuthor = quotesArr[randomQuoteID].author;

    prevQuoteID = randomQuoteID;

    let txtQuoteNode = document.createTextNode(currentQuote);
    let txtAuthorNode = document.createTextNode(currentAuthor);

    likeIcon.style.display = "block";
    likeIcon.style.color = "black";

    let badge = document.createElement('span');
    badge.classList.add('badge');   

    console.log(quotesArr[randomQuoteID])
    let txtBadge = document.createTextNode(quotesArr[randomQuoteID].likes);
    badge.appendChild(txtBadge);    
    
    quoteArea = document.querySelector('#quoteArea');
    authorArea = document.querySelector('#authorArea');

    quoteArea.textContent = "";
    authorArea.textContent = "";

    authorArea.appendChild(likeIcon);
    authorArea.appendChild(badge);
    authorArea.appendChild(txtAuthorNode);
    quoteArea.appendChild(txtQuoteNode);
    
    quoteArea.appendChild(authorArea);
}

let isNotEmpty = testStr => testStr !== "";

let addQuote = e => {

    let quoteInput = document.querySelector("#quote");
    let authorInput = document.querySelector("#author");

    if( isNotEmpty( quoteInput.value ) && isNotEmpty( authorInput.value )){

        quotesArr.push( {

            id: idQuote++,
            author: authorInput.value,
            quote: quoteInput.value,
            likes: 0
        })
        alert("ADDED NEW QUOTE SUCCESSFULLY");

        prevQuoteBtt.style.color = "black";
        nextQuoteBtt.style.color = "black";
        searchAuthorBtt.style.color = "black";
        authorNameInput.value = "";
        whereToWrite.textContent = "";
    }
    else{

        alert("PLEASE INSERT QUOTE AND AUTHOR NAME");
    }

    quoteInput.value = "";
    authorInput.value = "";

    e.preventDefault()
}

let resetBtts = () => {

    numOfCharsWithSpaceBtt.textContent = fstBttTxtContent;
    numOfCharsNoSpaceBtt.textContent = scdBttTxtContent;
    numOfWordsBtt.textContent = trdBttTxtContent;

    numOfCharsWithSpaceBtt.style.color = "black";
    numOfCharsNoSpaceBtt.style.color = "black";
    numOfWordsBtt.style.color = "black";
}

let howManyCharsWithSpaces = e => {

    e.target.textContent = "";
    howCharsWithSpaces = currentQuote.length;
    
    e.target.textContent = `${fstBttTxtContent} : ${howCharsWithSpaces}`;
    e.target.style.color = "red";

    e.preventDefault();
}

let howManyCharsNoSpaces = e => {

    e.target.textContent = "";
    howCharsNoSpaces = currentQuote.length - (currentQuote.split(" ").length-1);

    e.target.textContent = `${scdBttTxtContent} : ${howCharsNoSpaces}`;
    e.target.style.color = "green";

    e.preventDefault();
}

let howManyWords = e => {

    e.target.textContent = "";
    let howWords = currentQuote.match(/(\w+)/g).length;

    e.target.textContent = `${trdBttTxtContent} : ${howWords}`;
    e.target.style.color = "blue";

    e.preventDefault();
}

let likeQuote = e => {

    let badge;

    if(clickedLike){

        clickedLike = false;
        e.target.style.color = "red";
        quotesArr[randomQuoteID].likes++;
        badge = document.querySelector('.badge');
        badge.textContent = "";
        badge.textContent = quotesArr[randomQuoteID].likes;
    }
    else{

        clickedLike = true;
        e.target.style.color = "black";
        quotesArr[randomQuoteID].likes--;
        badge = document.querySelector('.badge');
        badge.textContent = "";
        badge.textContent = quotesArr[randomQuoteID].likes;
    }
}

let searchQuotes = e => {

    allAuthorQuotesArr =  quotesArr.filter( quoteObj => quoteObj.author.toLowerCase() === authorNameInput.value.toLowerCase() );

    if(inputChanged){

        if(allAuthorQuotesArr.length !== 0){

            whereToWrite.textContent = `${currentQupteDisplayedIndex+1}/${allAuthorQuotesArr.length} : "${allAuthorQuotesArr[currentQupteDisplayedIndex].quote}"`;
            whereToWrite.style.fontFamily = "Comforter, cursive";
            whereToWrite.style.color = "black";
            inputChanged = false;

            if(allAuthorQuotesArr.length > 1){

                nextQuoteBtt.style.color = "white";
            }
        }
        else{
    
            whereToWrite.textContent = `NO RESULTS WITH "${authorNameInput.value}" AUTHOR NAME !!!`;
            whereToWrite.style.fontFamily = "cursive";
            whereToWrite.style.color = "red";
            inputChanged = false;
            prevQuoteBtt.style.color = "black";
            nextQuoteBtt.style.color = "black";
        }

        parent.insertBefore(whereToWrite, writeBeforeThis);
    }

    e.preventDefault();
}

let enableSearchBtt = () => {

    searchAuthorBtt.style.color = "white";
    inputChanged = true;
}

let changeToNextQuote = e => {

    if(allAuthorQuotesArr.length <= 1){

        prevQuoteBtt.style.color = "black";
        nextQuoteBtt.style.color = "black";
    }
    else if(currentQupteDisplayedIndex < allAuthorQuotesArr.length-1){

        currentQupteDisplayedIndex++;
        whereToWrite.textContent = "";
        whereToWrite.textContent = `${currentQupteDisplayedIndex+1}/${allAuthorQuotesArr.length} : "${allAuthorQuotesArr[currentQupteDisplayedIndex].quote}"`;
        
        if(currentQupteDisplayedIndex !== allAuthorQuotesArr.length-1){

            nextQuoteBtt.style.color = "white";
        }
        else{

            nextQuoteBtt.style.color = "black";
            prevQuoteBtt.style.color = "white";
        }
    }

    e.preventDefault();
}

let changeToPrevQuote = e => {

    if(allAuthorQuotesArr.length <= 1){

        prevQuoteBtt.style.color = "black";
        nextQuoteBtt.style.color = "black";
    }
    else if(currentQupteDisplayedIndex > 0){

        currentQupteDisplayedIndex--;
        whereToWrite.textContent = "";
        whereToWrite.textContent = `${currentQupteDisplayedIndex+1}/${allAuthorQuotesArr.length} : "${allAuthorQuotesArr[currentQupteDisplayedIndex].quote}"`;

        if(currentQupteDisplayedIndex !== 0){

            prevQuoteBtt.style.color = "white";
        }
        else{

            prevQuoteBtt.style.color = "black";
            nextQuoteBtt.style.color = "white";
        }
    }

    e.preventDefault();
}


/****************************ADDING EVEVNTS TO ELEMENTS*****************************************/

generateBtt.addEventListener('click', changeQuote);
addQuoteBtt.addEventListener('click', addQuote);
numOfCharsWithSpaceBtt.addEventListener('click', howManyCharsWithSpaces);
numOfCharsNoSpaceBtt.addEventListener('click', howManyCharsNoSpaces);
numOfWordsBtt.addEventListener('click', howManyWords);
likeIcon.addEventListener('click', likeQuote);
searchAuthorBtt.addEventListener('click', searchQuotes);
authorNameInput.addEventListener('input', enableSearchBtt);
prevQuoteBtt.addEventListener('click', changeToPrevQuote);
nextQuoteBtt.addEventListener('click', changeToNextQuote); 









