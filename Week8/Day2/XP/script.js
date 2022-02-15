// Exercise 1 : HTML Form
const submitData = () => {

    let nameInput = document.forms.my_form.name.value;
    let commentsInput = document.forms.my_form.comments.value;

    if(nameInput.length > 0 && commentsInput.length > 0){

        return true;
    }
    else{

        return false;
    }
}

// Where will the sent data appear?
// In the URL of the page



// Exercise 2 : HTML Form #2
// When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
// Where will the sent data appear? Hint : Look at the Network Tab
// In the body of the request


// Exercise 3 : JSON Mario
let marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

  // Convert this JS object into a JSON object. What happens to the nested objects ?
 // They all as a string type

let jsonMarioGame = JSON.stringify(marioGame);

console.log(jsonMarioGame); 

// Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
console.log( JSON.stringify(marioGame, null, 2) );