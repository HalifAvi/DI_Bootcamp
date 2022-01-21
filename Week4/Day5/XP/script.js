


//Exercise 1 : Change The Navbar

// In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

let div = document.getElementById('navBar');
div.setAttribute('id','socialNetworkNavigation');

// Add a new <li> to the <ul>

// First, create a new <li> tag (use the createElement method)
let newLi = document.createElement('li');

// Create a new text node with “Logout” as its specified text
let newTextNode = document.createTextNode("LogOut");

// Append the text node to the newly created list node (li)
newLi.appendChild(newTextNode);

// Finally, append this updated list node to the unordered list above, using the appendChild method

let ul = document.getElementsByTagName('ul')[0];
ul.appendChild(newLi);

// Add new child <a> to newLi
let newA = document.createElement('a');
newA.appendChild(newTextNode);
newA.setAttribute('href','#');
newLi.appendChild(newA);


// Bonus - Display the text of first and last li elements
console.log(ul.firstElementChild.textContent);
console.log(ul.lastElementChild.textContent);


/************************************************************************************/

// Exercise 2 : Users

// Change the name “Pete” to “Richard”
let allUl = document.getElementsByTagName('ul');

allUl[0].getElementsByTagName('li')[1].textContent = "Richard";



// Change each first name of the two <ul>'s to your name
const changeYourNameEveryFirstLi = yourName => {

    allFirstLi.forEach( li => {

        li.textContent = yourName;
    })
}

let allFirstLi = document.querySelectorAll('ul li:first-child'); 

changeYourNameEveryFirstLi ("AVI");

// At the end of each <ul> add a <li> that says “Hey students”

const createNewElementWithText = (tagNameElement, sentence) => {

    let newElem = document.createElement(tagNameElement);
    let newTextNode = document.createTextNode(sentence);
    
    return newElem.appendChild(newTextNode);
}

const addLiInTheEndOfEveryUl = () => {

    for(let i=0; i<allUl.length;i++){

        let newLi = createNewElementWithText ('li', 'Hey students');
        allUl[i].appendChild(newLi);
    }
}

addLiInTheEndOfEveryUl('li', 'Hey students');

// Delete the name Sarah from the second <ul>

const getUiLength = (uiElement) => {

    return (uiElement.getElementsByTagName('li')).length;
}


const deleteListText = (textToChange, textToChangeTo, ul) => {

    for(let i=0; i<getUiLength(allUl[1]); i++){

        if(allUl[1].children[i].textContent === textToChange){
    
            allUl[1].children[i].textContent = textToChangeTo;
        }
    }
}

deleteListText("Sarah", "", allUl[1]);

// Bonus - Add a class called student_list to both of the <ul>'s

const addNewClassNameToListOfElement = (elementsList, newClassName) => {

    for(let i=0; i<elementsList.length; i++){

        elementsList[i].classList.add(newClassName);
    }
}

addNewClassNameToListOfElement(allUl,'student_list');


// Bonus - Add the classes university and attendance to the first <ul>
allUl[0].classList.add("university","attendance");



/***********************************************************************************************/

// Exercise 3 : Users And Style

// Add a “light blue” background color and some padding to the <div>

let div = document.getElementsByTagName('div')[0];
div.style.backgroundColor = "lightblue";
div.style.padding = "50px";

// Do not display the first name (John) in the list
let firstNameInList = document.getElementsByTagName('ul')[0].children[0].style.visibility =  "hidden";

// Add a border to the second name (Pete)
let secondNameInList = document.getElementsByTagName('ul')[0].children[1].style.border =  "5px solid black";

// Change the font size of the whole body

document.getElementsByTagName('*')[0].style.fontSize  = "50px";

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div)

let ul = document.getElementsByTagName('ul')[0];

if(div.style.backgroundColor === "lightblue"){

    alert(`Hello ${ul.children[0].innerHTML} and ${ul.children[1].innerHTML}`);
}















