
let idQuote = 0;

let currentQuote;
let clickedLike = true;
let randomQuoteID;
let prevQuoteID = randomQuoteID;
let fstBttTxtContent = document.querySelector('button#numOfCharsWithSpaceBtt').innerHTML;
let scdBttTxtContent = document.querySelector('button#numOfCharsNoSpaceBtt').innerHTML;
let trdBttTxtContent = document.querySelector('button#numOfWordsBtt').innerHTML;
let howCharsWithSpaces;
let howCharsNoSpaces;

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


    // let likeLabel = document.querySelector('#likeLabel');

    // // console.log(likeLabel)
    // likeLabel.style.display = "block";


    
    

    quoteArea = document.querySelector('#quoteArea');
    authorArea = document.querySelector('#authorArea');

    quoteArea.textContent = "";
    authorArea.textContent = "";

    authorArea.appendChild(likeIcon);
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
            like: 0
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

    if(clickedLike){

        clickedLike = false;
        e.target.style.color = "red";
        quotesArr[randomQuoteID].likes++;
    }
    else{

        clickedLike = true;
        e.target.style.color = "black";
        quotesArr[randomQuoteID].likes--;
    }
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













