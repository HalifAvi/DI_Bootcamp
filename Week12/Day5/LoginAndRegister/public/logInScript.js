
let logInBtt = document.querySelector('#logInBtt');
let nameInput = document.querySelector('#userName');
let passInput = document.querySelector('#password');



let makeBttEnable = () => {

    logInBtt.removeAttribute('disabled');

    if(nameInput.value === "" || passInput.value === ""){

        logInBtt.setAttribute('disabled', 'true');
    }
}
   

(nameInput).addEventListener('input', makeBttEnable);
(passInput).addEventListener('input', makeBttEnable);




