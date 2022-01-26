let inputBeforeTypingNewChar = "";

const removeIrrelevantChars = () => {


if(isValidInput(event.target.value)){

    inputBeforeTypingNewChar = event.target.value;
}
else{

    event.target.value = inputBeforeTypingNewChar;
}

}


const clearTheAllInput = (inputTag) => {

    inputTag.value = "";
}


const isValidInput = testStr => /^[a-zA-Z]*$/.test(testStr) 



let inputTag = document.querySelector('#input');
let btt = document.querySelector('#send');

inputTag.addEventListener('input', removeIrrelevantChars);
btt.addEventListener('click', function() { clearTheAllInput(inputTag)}, false);