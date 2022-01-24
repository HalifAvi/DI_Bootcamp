
// Exercise 1 : Change The Article

// Using a DOM property, retrieve the h1 and console.log it

let h1 = document.querySelector('h1');
console.log(h1.textContent);


// Using DOM methods, remove the last paragraph in the <article> tag
let article = document.querySelector('article');
let allPara = article.querySelectorAll('p');
allPara[3].remove();


// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const changeBackgroundColor = event => {

    event.target.classList.add("red");
    
}

let h2 = document.querySelector('h2');
h2.addEventListener("click",changeBackgroundColor);


// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

const hideOnClick = event => {

    event.target.classList.add("hide");
}

let h3 = document.querySelector('h3');
h3.addEventListener("click", hideOnClick);

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold

const boldAllParagraphs = event => {

    for(let i=0; i< allPara.length; i++){

        allPara[i].classList.add("bold");
    }
}

let button = document.createElement('button');
button.appendChild(document.createTextNode("click me"));
button.addEventListener('click',boldAllParagraphs);
article.appendChild(button);

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100
let changeFontSize = event => {

    let randomNum = Math.floor(Math.random() * 101);
    console.log(randomNum)
    event.target.style.fontSize = `${randomNum}px`;
}

h1.addEventListener('mouseover', changeFontSize);

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
const fadeInText = event => {

    event.target.classList.add("fade-in-text");
}


let secondPara = allPara[1];
secondPara.addEventListener('mouseover',fadeInText);



// Exercise 2 : Work With Forms

// Retrieve the form and console.log it
let form = document.forms[0];
// console.log(form);

// Retrieve the inputs by their id and console.log them
console.log(form.elements.fname);
console.log(form.elements.lname); 
console.log(form.elements.submit); 

// Retrieve the inputs by their name attribute and console.log them
console.log(form.elements.fname);
console.log(form.elements.lname); 
console.log(form.elements.submit); 

// When the user submits the form (ie. submit event listener)
// *get the values of the input tags,
// *make sure that they are not empty,
// *create an li per input value,
// *then append them to a the <ul class="usersAnswer"></ul>, below the form

const createNewLi = (inputValue, typeName) => {

    let newLi = document.createElement('li');

    newLi.textContent = `The ${typeName} of the user is : ${inputValue}`;

    return newLi;

}

    
const whenSubmitClicked = event => {

    let allInputElements = event.target.querySelectorAll('input');

    // "-1" because we don't need the button input value
    for(let i=0; i<allInputElements.length-1; i++){

        let inputValue = allInputElements[i].value;
        let typeName = allInputElements[i].id;
        let ul = document.getElementsByClassName('usersAnswer')[0];

        if(inputValue !== ""){

            let newLi = createNewLi(inputValue, typeName);
            ul.appendChild(newLi);
        }        
    }

    event.preventDefault();
}


form.addEventListener('submit', whenSubmitClicked);



// Exercise 3 : Transform The Sentence

// Create a global variable named allBoldItems
let allBoldItems;

// Create a function called getBold_items() that takes no parameter.
// This function should collect all the bold items inside the paragraph
// and assign them to the allBoldItems variable
const getBold_items = () => {

    allBoldItems = document.querySelectorAll('p strong');
}

//Create a function called highlight() that changes the color of all the bold text to blue
const highlight = () => {

    for(let i=0; i<allBoldItems.length; i++){

        allBoldItems[i].classList.add("blue");
    }
}

// Create a function called return_normal() that changes the color of all the bold text back to black
const return_normal = () => {

    for(let i=0; i<allBoldItems.length; i++){

        allBoldItems[i].classList.remove("blue");
    }
}

// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph),
// and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph)
getBold_items();
let p = document.querySelectorAll('p')[3];
console.log(p)
p.addEventListener('mouseover',highlight);
p.addEventListener('mouseout',return_normal);


Exercice 4 : Volume Of A Sphere

Write a JavaScript program to calculate the volume of a sphere
const pi = 3.14;

const checkIsValidNum = inputToCheck => /^\d+$/.test(inputToCheck);

const calculateSphereVolume = event => {

    let volResult;
    let form = document.forms[0];
    let inputRadius = form.elements.radius.value;

    if(checkIsValidNum(inputRadius)){

        form.elements.volume.value = 3/4*pi*(Math.pow(inputRadius, 3));
    }
    else{

        form.elements.volume.value = "";
        form.elements.radius.value = "";
        alert("NOT A NUMBER!!!!");
    }

    event.preventDefault();
}

const exe4 = () => {

    let form = document.forms[0];
    let button = form.elements.submit;
    button.addEventListener('click', calculateSphereVolume);
}

exe4();


// Bonus Exercise 5 : Event Listeners

// Add as many events listeners as possible to one element on your webpage.
// Each listener should do a different thing, for instance- change position x,
// change position y, change color, change the font size… and more.
let startPositionX = 0;
let startPositionY = 0;
let index = 0;
let index2 = 10;
const colorArr = ['red','blue','orange','brown','yellow','green','pink','black','grey','lightblue'];


const changePositionX = event => {

    startPositionX += 30;
    event.target.style.marginLeft = `${startPositionX}px`;
    event.stopPropagation();
}

const changePositionY = event => {

    startPositionY += 30;
    event.target.style.marginTop = `${startPositionY}px`;
    event.stopPropagation();
}

const changeColor = event => {

    event.target.style.color = colorArr[index++]; 
    event.target.style.background = colorArr[index2--];  

    if(index >= colorArr.length){

        index = 0;
    }

    if(index2 < 0){

        index2 = 10;
    }

    event.stopPropagation();
}

let div = document.querySelector('div');

div.addEventListener('click', changePositionX);
div.addEventListener('mouseleave', changePositionY);
div.addEventListener('mouseover', changeColor);
div.addEventListener('click', changeColor);






 

