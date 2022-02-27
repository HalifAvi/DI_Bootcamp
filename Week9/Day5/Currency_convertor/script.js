let firstSelectElement = document.querySelector('#from');
let secondSelectElement = document.querySelector('#to');
let amountInput = document.querySelector('#amount');

let addOptionsToSelect = (selectElement, arrOfOptions) => {

    arrOfOptions.forEach( (currency, idx) => {

        let newCurrencyToAdd = document.createElement('option');
        newCurrencyToAdd.innerHTML = `${currency[0]} - ${currency[1]}`; 
        idx === 0 ? newCurrencyToAdd.setAttribute("selected","true") : null;
        selectElement.appendChild(newCurrencyToAdd);
    });
}


let displayAllSupportedCurrencies = arrOfOptions => {

    addOptionsToSelect(firstSelectElement, arrOfOptions);
    addOptionsToSelect(secondSelectElement, arrOfOptions);
}


let updateDisplay = () => {

    fetch(`https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/codes`)
    .then((response) => response.json())
    .then((res) => displayAllSupportedCurrencies(res.supported_codes))
    .catch(function() {
       
        console.log("There is an error getting the supported currencies data");
    });
}


let convert = e => {

    e.preventDefault();

    let formData = new FormData(document.querySelector('form'));
    let convertionObj = Object.fromEntries(formData.entries());
    convertionObj.from = (convertionObj.from).substring(0, 3);
    convertionObj.to = (convertionObj.to).substring(0, 3);

    if(amountInput.value !== "0"){

        fetch(`https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/pair/${convertionObj.from}/${convertionObj.to}/${convertionObj.amount}`)
        .then((response) => response.json())
        .then((res) => (document.querySelector('#amountTo')).textContent = `${res.conversion_result} ${convertionObj.to}`)
        .catch(function() {
           
            console.log("There is an error making the convertion");
        });

    }else{

        document.querySelector('#amountTo').textContent = "0";
    }
}

let exchange = e => {

    let temp = firstSelectElement.value;
    firstSelectElement.value = secondSelectElement.value;
    secondSelectElement.value = temp;

    if(amountInput !== 0){

        convert(e);

    }
}



updateDisplay();
(document.querySelector('form')).addEventListener('submit', convert);
(document.querySelector('#exchange')).addEventListener('click', exchange);







  












