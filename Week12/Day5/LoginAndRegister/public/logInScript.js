
let logInBtt = document.querySelector('#logInBtt');
let nameInput = document.querySelector('#userName');
let passInput = document.querySelector('#password');



let makeBttEnable = () => {

    logInBtt.removeAttribute('disabled');

    if(nameInput.value === "" || passInput.value === ""){

        logInBtt.setAttribute('disabled', 'true');
    }
}
   

let handleData = event => {

    // AFTER WE STAY IN THE SAME LOG-IN PAGE AND THE VALUES WITH US WE MAKE FETCH 
    event.preventDefault();

    let userName = document.querySelector('#userName').value;
    let password = document.querySelector('#password').value;

    const data = { userName: userName, password: password };

    // It's a POST routh so we have to write the long pattern
    fetch('/login', {

        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        
        let div = document.querySelector('#message');
        div.textContent = data.message;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}
    

   



(nameInput).addEventListener('input', makeBttEnable);
(passInput).addEventListener('input', makeBttEnable);




