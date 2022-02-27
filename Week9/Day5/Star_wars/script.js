
let whereToAppend = document.querySelector('#displayContent');
let details = ["name", "height", "gender", "birth_year", "homeworld"];
let worldName;

let fetchWorldHome = (data) => {

    fetch(`${data.homeworld}`)
    .then((response) => response.json())
    .then((res) => worldName = res.name)
    .catch(function() {
       
        console.log("There is an error getting the homeworld");
        worldName = "unknown";
    });
}


let displayData = data => {

    whereToAppend.textContent = "";

    if(data.detail !== "Not found"){

        let value;

        fetchWorldHome(data);
    
        details.forEach(detail => {
    
            let element;
    
            detail === "name" ? element = document.createElement("h1") : element = document.createElement("h3");
            detail === "homeworld" ? value = worldName : value = data[detail];
            element.textContent = `${detail}: ${value}`;
            element.style.color = "white";
            element.style.textAlign = "center";
            element.style.margin = "30px";
            whereToAppend.appendChild(element);
        });
    
    
    }else{

        whereToAppend.textContent = "";
        let displayError = document.createElement('h1');
        displayError.textContent = "Oh No! That person isn't available!!!";
        displayError.style.color = "white";
        displayError.style.position = "fixed";
        displayError.style.left = "420px";
        whereToAppend.appendChild(displayError);
    }
}

let displaySpinner = () => {

    let spinnerIcon = document.createElement("i");
    spinnerIcon.classList.add("fa-3x", "fas", "fa-spinner", "fa-pulse");
    spinnerIcon.style.color = "yellow";
    spinnerIcon.style.fontSize = "120px";
    spinnerIcon.style.position = "absolute";
    spinnerIcon.style.left = "18vw";
    spinnerIcon.style.margin = "20px";

    let loading = document.createElement("h1");
    loading.textContent = "Loading..."
    loading.style.color = "yellow";
    loading.style.position = "absolute";
    loading.style.left = "18vw";
    loading.style.top = "18vw";
    loading.style.margin = "20px";
    whereToAppend.appendChild(spinnerIcon);
    whereToAppend.appendChild(loading);
}



let handleSubmit = e => {

    whereToAppend.textContent = "";

    e.preventDefault();

    displaySpinner();

    fetch(`https://swapi.dev/api/people/${Math.floor(Math.random() * 100)}`)
    .then((response) => response.json())
    .then((res) => displayData(res))
    .catch(function() {
       
        console.log("There is an error getting the data");
    });
}


























let btt = document.querySelector('button');
btt.addEventListener("click", handleSubmit);
