
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

let whereToWrite = document.createElement('p');
whereToWrite.classList.add('quoteToDisplayStyle');
let parent = document.querySelector('#searchAuthorForm');
let searchAuthorInput = document.querySelector("#authorNameToSearch");
let prevQuoteBtt = document.querySelector("#prevQuoteBtt");
let nextQuoteBtt = document.querySelector("#nextQuoteBtt");
let authorNameInput = document.querySelector('#authorNameToSearch');




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

    let likeIcon = document.querySelector('ion-icon');
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
    }
    else{

        alert("PLEASE INSERT QUOTE AND AUTHOR");
    }

    quoteInput.value = "";
    authorInput.value = "";

    e.preventDefault()
}

let resetBtts = () => {

    let fstBtt = document.querySelector('button#numOfCharsWithSpaceBtt');
    let scdBtt = document.querySelector('button#numOfCharsNoSpaceBtt');
    let trdBtt = document.querySelector('button#numOfWordsBtt');

    fstBtt.textContent = fstBttTxtContent;
    scdBtt.textContent = scdBttTxtContent;
    trdBtt.textContent = trdBttTxtContent;

    fstBtt.style.color = "black";
    scdBtt.style.color = "black";
    trdBtt.style.color = "black";
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

                document.querySelector('#nextQuoteBtt').style.color = "white";
            }
        }
        else{
    
            whereToWrite.textContent = `NO RESULTS WITH "${authorNameInput.value}" AUTHOR NAME !!!`;
            whereToWrite.style.fontFamily = "cursive";
            whereToWrite.style.color = "red";
            inputChanged = false;
        }

        parent.insertBefore(whereToWrite, writeBeforeThis);
    }

    e.preventDefault();
}

let enableSearchBtt = () => {

    document.querySelector('#searchAuthorBtt').style.color = "white";
    inputChanged = true;
}

let changeToNextQuote = e => {

    if(currentQupteDisplayedIndex < allAuthorQuotesArr.length-1){

        currentQupteDisplayedIndex++;
        whereToWrite.textContent = "";
        whereToWrite.textContent = `${currentQupteDisplayedIndex+1}/${allAuthorQuotesArr.length} : "${allAuthorQuotesArr[currentQupteDisplayedIndex].quote}"`;
        nextQuoteBtt.style.color = "white";
    }
    else{

        nextQuoteBtt.style.color = "black";
        prevQuoteBtt.style.color = "white";
    }

    e.preventDefault();
}

let changeToPrevQuote = e => {

    if(currentQupteDisplayedIndex > 0){

        currentQupteDisplayedIndex--;
        whereToWrite.textContent = "";
        whereToWrite.textContent = `${currentQupteDisplayedIndex+1}/${allAuthorQuotesArr.length} : "${allAuthorQuotesArr[currentQupteDisplayedIndex].quote}"`;
        prevQuoteBtt.style.color = "white";
    }
    else{

        prevQuoteBtt.style.color = "black";
        nextQuoteBtt.style.color = "white";
    }

    e.preventDefault();
}




let generateBtt = document.querySelector("button#generateQuoteBtt");
generateBtt.addEventListener('click', changeQuote);

let addQuoteBtt = document.querySelector("button#addQuoteBtt");
addQuoteBtt.addEventListener('click', addQuote);

let numOfCharsWithSpaceBtt = document.querySelector("button#numOfCharsWithSpaceBtt");
numOfCharsWithSpaceBtt.addEventListener('click', howManyCharsWithSpaces);

let numOfCharsNoSpaceBtt = document.querySelector("button#numOfCharsNoSpaceBtt");
numOfCharsNoSpaceBtt.addEventListener('click', howManyCharsNoSpaces);

let numOfWordsBtt = document.querySelector("button#numOfWordsBtt");
numOfWordsBtt.addEventListener('click', howManyWords);

let likeIcon = document.querySelector("ion-icon");
likeIcon.addEventListener('click', likeQuote);

let searchAuthorBtt = document.querySelector("#searchAuthorBtt");
searchAuthorBtt.addEventListener('click', searchQuotes);

searchAuthorInput.addEventListener('input', enableSearchBtt);
prevQuoteBtt.addEventListener('click', changeToPrevQuote);
nextQuoteBtt.addEventListener('click', changeToNextQuote); 









