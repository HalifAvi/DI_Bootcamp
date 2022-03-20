
let registerBtt = document.querySelector('#registerBtt');
let usernameInput = document.querySelector('#userName');
let firstnameInput = document.querySelector('#firstName');
let lastnameInput = document.querySelector('#lastName');
let emailInput = document.querySelector('#email');
let passInput = document.querySelector('#password');


let makeBttEnable = () => {
    
    let options = [

        firstnameInput.value === "",
        lastnameInput.value === "",
        emailInput.value === "",
        usernameInput.value === "",
        passInput.value === ""
    ];

    if(options.every(condition => !(condition))){

        registerBtt.removeAttribute('disabled');
    }else{

        registerBtt.setAttribute('disabled', 'true');
    }
}

