
let idQuote = 0;

let currentQuote;

let randomQuoteID;
let prevQuoteID = randomQuoteID;

const quotesArr = [

    {
        id: idQuote++,
        author: "Dan-Emmanuel Azoulay",
        quote: "All roads lead to Rome."
    },

    {
        id: idQuote++,
        author: "Walt Disney",
        quote: "The way to get started is to quit talking and begin doing."
    },

    {
        id: idQuote++,
        author: "John Lennon",
        quote: "Life is what happens when you're busy making other plans."
    }
]


let changeQuote = () => {

    while(prevQuoteID === randomQuoteID){

        // Returns a random integer from 0 to quotesArr.length-1:
        randomQuoteID = Math.floor(Math.random() * quotesArr.length);
    }

    currentQuote = quotesArr[randomQuoteID].quote;
    currentAuthor = quotesArr[randomQuoteID].author;

    prevQuoteID = randomQuoteID;

    let txtQuoteNode = document.createTextNode(currentQuote);
    let txtAuthorNode = document.createTextNode(currentAuthor);

    quoteArea = document.querySelector('#quoteArea');
    authorArea = document.querySelector('#authorArea');

    console.log(authorArea)

    quoteArea.textContent = "";
    authorArea.textContent = "";

    quoteArea.appendChild(txtQuoteNode);
    authorArea.appendChild(txtAuthorNode);
    quoteArea.appendChild(authorArea);
}


let generateBtt = document.querySelector("#generateQuote");
generateBtt.addEventListener('click', changeQuote);







