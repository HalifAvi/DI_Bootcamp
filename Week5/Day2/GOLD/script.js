

// // Exercise 1 : Select A Kind Of Music

// // Display the value of the selected option

// console.log(genres.value)


// // Add an additional option to the select tag: <option value="classic">Classic</option>
// let newOption = document.createElement('option');
// newOption.setAttribute('value','classic');
// newOption.textContent = "Classic";
// document.querySelector('select').appendChild(newOption);

// console.log(document.querySelector('select'));


// // The newly added option should be selected by default
// newOption.setAttribute('selected','');



// // Exercise 2: Delete Colors

// // Add a click event listener to the <input type="button">.
// // When clicked on, it should call a function named : removecolor()
// // that removes the selected color from the dropdown list
// const removecolor = () => {

//     // GET THE XELECT ELEMENT
//     // FIRST GET THE CURRENT SELECTED INDEX
//     // SECOND USE THE REMOVE FUN ACCORDING TO THE SPECIFIC INDEX

//    let selectElement = document.forms[0][0];

//    let currSelectedIndex = selectElement.selectedIndex;
   
//    selectElement.remove(currSelectedIndex);
// }


// let btt = document.forms[0][1];
// btt.addEventListener('click',removecolor);



// Exercise 3 : Create A Shopping List

// Create an empty array. For example: let shoppingList=[]
let shoppingList=[];

// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM
let newForm = document.createElement('form');
let txtField = document.createElement('input');
let txtNode = document.createTextNode('input');
txtField.appendChild(txtNode);
let btt2 = document.createElement('button');
btt2.textContent = "ADD ITEM"

newForm.appendChild(txtField);
newForm.appendChild(btt2);

(document.querySelector('div')).appendChild(newForm);

// Type what you need to buy in the text input field,
// then add the new item to the array as soon as you click on the “AddItem” button

const addItem = e => {

    shoppingList.push(document.forms[0][0].value);
    console.log(shoppingList);
    e.preventDefault();
}



btt2.addEventListener('click', addItem);




// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function
const clearAll = () => {

    document.forms[0][0].value = "";
}


let clearBtt = document.createElement('button');
clearBtt.textContent = "clear all";
clearBtt.addEventListener('click',clearAll)
newForm.appendChild(clearBtt);

console.log(shoppingList);

