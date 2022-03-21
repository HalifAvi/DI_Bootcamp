
let countries = [];
let countriesSelectElement = document.querySelector('#countries');
let citiesSelectElement = document.querySelector('#cities');


let appendCountriesToSelect = data => {

    countries = data;

    countries.forEach(country => {

        let option = document.createElement('option');
        option.textContent = country.country;
        countriesSelectElement.appendChild(option);
    });
}


let clearSelectOptions = () => {

    let selectLength = citiesSelectElement.options.length;
    for (i = selectLength-1; i >= 0; i--) {
        citiesSelectElement.options[i] = null;
    }
}


let appendCitiesToSelect = data => {

    // Make the select element empty from previous options
    clearSelectOptions();

    // Now set the select element with the new options (=cities)
    data.forEach(city => {

        let option = document.createElement('option');
        option.textContent = city.city;
        citiesSelectElement.appendChild(option);
    });
}


let displayAllRelatedCities = () => {

    let selectedOptionElement = countriesSelectElement.options[countriesSelectElement.selectedIndex];
    let countryArrObj = countries.filter(country => { return country.country === selectedOptionElement.text; });
    let countryId = countryArrObj[0].country_id // In that case it's one value only (but still an array)

    fetch(`/cities/${countryId}`)
    .then(res => res.json())
    .then(data => appendCitiesToSelect(data))
    .catch(e=> console.log(e));
}


let initPage = () => {

    fetch(`/countries`)
    .then(res => res.json())
    .then(data => { 
        
        appendCountriesToSelect(data);
        displayAllRelatedCities();
    })
    .catch(e=> console.log(e));
}