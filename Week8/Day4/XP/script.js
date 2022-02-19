

// Create a program to retrieve the data from the API URL provided above. 
// Use XMLHttpRequest object to make an AJAX request to the Giphy API and console.log the Javascript Object.

// Exercise 2 : Giphy API

// Using this part of the documention, retrieve 10 gifs about the “sun”.
// The starting position of the results should be 2.
// Console.log the Javascript Object

let xhr = new XMLHttpRequest();
let xhr1 = new XMLHttpRequest();

xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My", true);
xhr1.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My", true);

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







// class Image{

//     constructor({title, images : {original : {url}}}){

//         this.url = url;
//         this.title = title;
//     }

//     createHtml(){

//         let image = document.createElement('img');
//         image.src = this.url;
//         image.title = this.title;
//         document.body.append(image);
//     }
// }





// let xhr = new XMLHttpRequest();

// let rParams = {

//     api_key : `hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`,
//     q : `hilarious`,
//     rating : `g`,

//     generatorParams (){

//         return Object.entries(this) // Create [value,key] array from this object
//         .filter( ([key, value]) => typeof value !== "function") // Remove the function
//         .map( ([key, value]) => `${key}=${value}`) // Create an array of strings 
//         .join("&") // Convert array to one big string and put '&' between the elements 
//     }
// }

// xhr.open('GET', `https://api.giphy.com/v1/gifs/search?${rParams.generatorParams()}`);

// xhr.responseType = "json";

// xhr.send();



// xhr.onload = function() {

//     if(xhr.status != 200){


//     }
//     else{

//         let arr = xhr.response.data;

//         arr.forEach(element => {

//             console.log(element);

//             let currentImg = new Image(element);
//             currentImg.createHtml();
//         });
//     }
// }






