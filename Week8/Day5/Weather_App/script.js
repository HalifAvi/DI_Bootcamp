

class TemperatureCard{

    constructor( { sys : {country}, main : {temp}, weather : [{description}], name } ){ 
     
        this.country = country;
        this.city = name;
        this.temp = temp;
        this.description = description;
    }

    createHtml(){

        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.style.width = "18rem";
        cardDiv.style.display = "inline-block";
        cardDiv.style.margin = "20px";
        cardDiv.style.textAlign = "center"; 
        cardDiv.style.background = "#CAA7DE";
        cardDiv.style.padding = "20px"; 

        let cityName = document.createElement('h2');
        cityName.textContent = this.city;
        let countryName = document.createElement('h6');
        countryName.textContent = this.country;
        let temperature = document.createElement('h1');
        temperature.textContent = this.temp;
        let description = document.createElement('h1');
        description.textContent = this.description;

        cardDiv.appendChild(cityName);
        cardDiv.appendChild(countryName);
        cardDiv.appendChild(temperature);
        cardDiv.appendChild(description); 

        let whereToAppend = document.querySelector('#col1CitiesDisplay');
        whereToAppend.appendChild(cardDiv);
    }
}


let makeRequest = e => {

    e.preventDefault();

    let inputCityValue =  (e.target).cityInput.value;

    let xhr = new XMLHttpRequest();

    let rParams = {

        q : inputCityValue,
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

        if(xhr.status != 200){
    
    
        }
        else{
    
            console.log(xhr.response);
    
            let data = xhr.response;
    
            let currentTempCard = new TemperatureCard(data);
    
            console.log(currentTempCard);
    
            currentTempCard.createHtml();
        }
    }

    xhr.send();
}






(document.querySelector('form')).addEventListener("submit", makeRequest);
