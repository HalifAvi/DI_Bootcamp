
// 1st Challenge
// Implement a simple version of Promise.all.
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.


// FIRST SOLUTION - WITH '.THEN' AND '.CATCH' (LOOKS LIKE 'ASYNC' CODE) 
let getArrOfResValues1 = promisesArr => {

    // if all promises in the collection resolves,
    // `results` is an array of promise's values
    Promise.all(promisesArr)
    .then(results => { console.log(results) })

    // if any promise is rejected,
    // `error` will have the rejected value of the promise that failed
    // if multiple failed,
    // `error` will be the error of the first one that failed
    .catch((error) => {

        console.log(error);

    });
}


const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]


getArrOfResValues1([promise1, promise2, promise3]);




// SECOND SOLUTION - WITH 'ASYNC', 'AWAIT' AND 'TRY-CATCH' (LOOKS LIKE 'SYNC' CODE) 
let getArrOfResValues2 = async promisesArr => {

    try{

        // 'Promise.all' return an array of promise's values
        // We use here the 'await' keyword insted of '.then'
        // It means we'll wait here till we'll have the answer from 'Promise.all'
        let arrToreturn = await Promise.all(promisesArr);

        console.log(arrToreturn)

    }catch(error){

        console.log(error);

    }
}


getArrOfResValues2([promise1, promise2, promise3]);



// 2nd Challenge
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.
// In the HTML file, create a form with 6 inputs:
// name of the first city, its latitude and its longitude
// name of the second city, its latitude and its longitude.
// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()

const cityDetails = [
    {
        city: "Paris",
        lat:  48.864716,
        long: 2.349014
    },

    {
        city: "New York",
        lat:  40.730610,
        long: -73.935242
    }];




let getObjByCityName = cityValue => cityDetails.find( cityDetailObj => cityDetailObj.city.toLowerCase() === cityValue.toLowerCase());

let generatorParams = cityValue => {

    return Object.entries(getObjByCityName(cityValue)) // Create [value,key] array from this object
          .filter( ([key, value]) => key !== "city") // Remove 'city'
          .map( ([key, value]) => `${key}=${value}`) // Create an array of strings 
          .join("&") // Convert array to one big string and put '&' between the elements 
}

let displayCoordinatesAndSunriseHour = response => {

    try{

        cityDetails.forEach( (element, idx) => {

            let latLabel = document.querySelector(`#latitude${idx+1}`); 
            let langLabel = document.querySelector(`#longitude${idx+1}`); 
    
            latLabel.innerHTML = `Latitude: ${element.lat}`;
            langLabel.innerHTML = `Longitude: ${element.long}`;
            let p = document.createElement('p');
            p.style.display = "inline"; 
            p.style.margin = "20px";
            p.textContent = `SunriseHour: ${response[idx].results.sunrise}`;
            langLabel.appendChild(p);
        });
    }
    catch(error){

        throw new Error ("Error from 'displayCoordinatesAndSunriseHour' function");

    }

}


let handleSubmit = async (e) => {

    try{

        e.preventDefault();

        let inputFirstCityValue =  (e.target).firstCityInput.value;
        let inputSecondCityValue = (e.target).secondCityInput.value;

        if(inputFirstCityValue !== "" && inputSecondCityValue !== ""){

      
            let urls = [ `https://api.sunrise-sunset.org/json?${generatorParams(inputFirstCityValue)}`,
                         `https://api.sunrise-sunset.org/json?${generatorParams(inputSecondCityValue)}`, 
            ];

            const response = await Promise.all(urls.map(url =>
                                   fetch(url).then(res => res.json())))

            displayCoordinatesAndSunriseHour(response);

        }else{

            throw new Error ("You entered invalid city names")
        }
    
    }catch(error){

        console.log(error)
    }
}


(document.querySelector('form')).addEventListener("submit", handleSubmit);


