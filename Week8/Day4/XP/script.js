

// Create a program to retrieve the data from the API URL provided above. 
// Use XMLHttpRequest object to make an AJAX request to the Giphy API and console.log the Javascript Object.

// Exercise 2 : Giphy API

// Using this part of the documention, retrieve 10 gifs about the “sun”.
// The starting position of the results should be 2.
// Console.log the Javascript Object

let xhr = new XMLHttpRequest();
let xhr1 = new XMLHttpRequest();

xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My", [true]);
xhr1.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My", [true]);

xhr.send();
xhr1.send();

xhr.responseType = "json";
xhr1.responseType = "json";

xhr.onload = function() {

    console.log(xhr.response);
}

xhr1.onload = function() {

    console.log(xhr1.response);
}

