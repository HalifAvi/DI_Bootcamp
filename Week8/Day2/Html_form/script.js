
const submitData = e => {

    e.preventDefault();

    let formData = new FormData(e.target);
    let toBeJsoned = Object.fromEntries(formData.entries());
    let jsoned = JSON.stringify(toBeJsoned);

    document.querySelector('div').textContent = jsoned;
}

let form = document.querySelector("form");
form.addEventListener('submit', submitData);


 

