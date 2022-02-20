
let allPrevCityTemp = [];

let changeBackgroundColor = e => {

    e.target.classList.toggle("redBackground");
}

let removeCard = e => {

    let displayDiv = e.target.parentElement.parentElement;
    let cardDiv = e.target.parentElement;
    displayDiv.removeChild(cardDiv);

    let idxToRemove = allPrevCityTemp.findIndex( element => element.city === e.target.parentElement.id);
    allPrevCityTemp.splice(idxToRemove, 1); // 2nd parameter means remove one item only
}

let displayUserLocation = () => {

	jQuery.get("http://ipinfo.io",function(e){
        makeRequest(e.city, true); 
	},"jsonp")
}


let changeTempUnit = e => {

    if(allPrevCityTemp.length > 0){

        if(e.target.checked) {
            
            allPrevCityTemp.forEach(element => {

                let temperatureElement  = document.querySelector(`div#${(element.city).replace(/\s/g, '')}`).children.tempNum;
                temperatureElement.innerHTML = (((element.temp)*9/5) + 32).toFixed(0) + "&#x2109;";
            }); 

        } else {

            allPrevCityTemp.forEach(element => {

                let temperatureElement  = document.querySelector(`div#${(element.city).replace(/\s/g, '')}`).children.tempNum;
                temperatureElement.innerHTML = element.temp +  "&#x2103;";
            });  

        }
    }
}

class TemperatureCard{

    constructor( { sys : {country}, main : {temp}, weather : [{description, icon}], name } ){ 
     
        this.country = country;
        this.city = name;
        this.temp = parseFloat(temp).toFixed(0);
        this.description = description;
        this.iconCode = icon;
    }

    

    createHtml(userLocation){

        let whereToAppend;

        userLocation ?  whereToAppend = document.querySelector('#col1Title') : whereToAppend = document.querySelector('#col1CitiesDisplay');

        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.style.width = "18rem";
        cardDiv.style.display = "inline-block";
        cardDiv.style.marginTop = "100px";
        cardDiv.style.marginRight = "20px";
        userLocation ? cardDiv.style.background = "red" : cardDiv.style.background = "#7887AB";
        cardDiv.style.padding = "20px"; 
        cardDiv.style.border = "2px solid white"; 
        cardDiv.style.position = "relative";
        cardDiv.setAttribute('id',(this.city).replace(/\s/g, ''));

        let cityName = document.createElement('h2');
        cityName.textContent = this.city;
        cityName.style.display = "inline-block";
        cityName.style.verticalAlign = "text-top";
        let countryName = document.createElement('h6');
        countryName.textContent = this.country;
        countryName.style.borderRadius = "40%";
        countryName.style.width = "30px";
        countryName.style.color = "white";
        countryName.style.display = "inline-block";
        countryName.style.background = "orange";
        countryName.style.margin = "10px";
        let temperature = document.createElement('h1');
        temperature.textContent = this.temp;
        temperature.innerHTML = this.temp + "&#x2103;";
        temperature.style.fontSize = "80px";
        temperature.setAttribute("name","tempNum");
        let removeBtt = document.createElement('h5');
        removeBtt.textContent = "X";
        removeBtt.style.position = "absolute";
        removeBtt.style.top = "10px";
        removeBtt.style.right = "10px";
        removeBtt.style.color = "white";

        let description = document.createElement('h5');
        description.textContent = this.description;
        let icon = document.createElement('img');
        icon.src = `http://openweathermap.org/img/wn/${this.iconCode}@2x.png`;
        icon.alt = this.iconCode;

        if(userLocation){

            let userLocationTitle = document.createElement('h3');
            userLocationTitle.textContent = "YOUR LOCATION : ";
            userLocationTitle.style.color = "white";
            cardDiv.appendChild(userLocationTitle);
        }

        cardDiv.appendChild(cityName);
        cardDiv.appendChild(countryName);
        cardDiv.appendChild(temperature);
        cardDiv.appendChild(icon);
        cardDiv.appendChild(description); 

        if(!userLocation){

            removeBtt.addEventListener('mouseover', changeBackgroundColor);
            removeBtt.addEventListener('mouseout', changeBackgroundColor);
            removeBtt.addEventListener('click', removeCard);
            cardDiv.appendChild(removeBtt); 
        }
     
        whereToAppend.appendChild(cardDiv);
    }
}

let makeRequest = (cityName, userLocation) => {

    let xhr = new XMLHttpRequest();

    let rParams = {

        q : cityName,
        appid : `6bc236fa8bd5e7e03f83fd8cea3eac74`,
        units : `metric`,

        generatorParams (){

            return Object.entries(this) // Create [value,key] array from this object
                .filter( ([key, value]) => typeof value !== "function") // Remove the function
                .map( ([key, value]) => `${key}=${value}`) // Create an array of strings 
                .join("&") // Convert array to one big string and put '&' between the elements 
        }
    }

    xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?${rParams.generatorParams()}`);

    xhr.responseType = "json";

    xhr.onload = function() {

        if(xhr.status !== 200){

            alert("Ooops! Your location could not be found.")
        }
        else{
    
            let data = xhr.response;
    
            let currentTempCard = new TemperatureCard(data);

            allPrevCityTemp.push(currentTempCard);
            currentTempCard.createHtml(userLocation);
        }
    }

    xhr.send();
}


let displayTempCard = e => {

    e.preventDefault();

    let inputCityValue =  (e.target).cityInput.value;

    if(inputCityValue !== ""){

        if( ! (allPrevCityTemp.find( (element => element.city.toLowerCase() ===  inputCityValue.toLowerCase() )))){

            makeRequest(inputCityValue, false);
          
        }
    
        (document.querySelector('#searchingInput')).value = "";
    }
}



(document.querySelector('form')).addEventListener("submit", displayTempCard);
(document.querySelector('#toggleswitch')).addEventListener("change" ,changeTempUnit);
displayUserLocation();



