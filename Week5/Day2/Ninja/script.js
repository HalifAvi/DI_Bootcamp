
// Exercise 1 : Calculate The Tip


// const calculateTip = () => {

//     let billAmount  = document.forms[0].billamt.value;

//     let IdxCurrOption = serviceQual.selectedIndex;
//     let serviceQuality = serviceQual.options[IdxCurrOption].value;

//     let numberOfPeople = document.querySelector('#peopleamt').value;

//     if(serviceQuality === 0 || billAmount === ""){

//         alert("you have a missing value (bill amount or service quality) - check please!");
//     }

//     if(numberOfPeople === "" || numberOfPeople  < 1){

//         let eachTag = document.querySelector('#each');
//         eachTag.style.display = "none"
    
//         numberOfPeople = 1;
//     }

//     let total = (( billAmount * serviceQuality ) / numberOfPeople).toFixed(2);

//     totalTipIdElement.style.display = "block";

//     document.querySelector('#tip').innerHTML = total;

//     console.log(total)
// }


// let totalTipIdElement = document.querySelector('#totalTip');
// totalTipIdElement.style.display = "none";

// let calculateIdElement = document.querySelector('#calculate');
// calculateIdElement.addEventListener('click',calculateTip);




// Exercise 2 : Validate The Email

// const checkEmail = (e) => {

//     let regExp = /^[a-zA-Z]+[a-zA-Z\d]*[@][a-zA-Z]+[.]com$/;

//     console.log(inputTag.value);

//     if(regExp.test(inputTag.value)){

//         console.log("TRUE");
//     }
//     else{

//         console.log("FALSE");
//     }

//     e.preventDefault();
// }

// let formTag = document.createElement('form');
// let body = document.querySelector('body');

// let inputTag = document.createElement('input');
// inputTag.appendChild(document.createTextNode("INPUT"))
// inputTag.setAttribute("type","email");

// let bttTag = document.createElement('button');
// bttTag.innerHTML = "SUBMIT";

// formTag.appendChild(inputTag);
// formTag.appendChild(bttTag);

// body.appendChild(formTag);

// bttTag.addEventListener("click", checkEmail);



// Exercise 3 : Get The User’s Geolocation Coordinates

const geolocation = (e) => {


    if(navigator.geolocation){

        // Use a call back fun to display the position obj
        console.log( navigator.geolocation.getCurrentPosition((position)=> {

        console.log(position.coords.latitude);
        console.log(position.coords.longitude);

        // var img = new Image();
        // img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=13&size=800x400&sensor=false";
        //           $('#output').html(img);
        }))
    }
    else{

        console.log("geolocation is not supported");
    }




    e.preventDefault();

}


let body = document.querySelector('body');

let bttTag = document.createElement('button');
bttTag.innerHTML = "CLICK ME";

body.appendChild(bttTag);

bttTag.addEventListener("click", geolocation);