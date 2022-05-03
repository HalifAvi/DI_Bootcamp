import {

    CURRENT_LOCATION,
    CURRENT_WEATHER,
    SEARCHED_WEATHER,
    API_KEY,
    ADD_TO_FAV

} from '../constants';

import {getFromLocalStorage} from '../utils/storage';



export const setCurrentLocation = () => (dispatch) => {

    navigator.geolocation.getCurrentPosition((position) => {

        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        // API TO FIND THE PLACE NAME AND THE LOCATION-KEY BY LAT&LON OF THE LOCATION
        fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude},${longitude}`)
        .then(res => res.json())
        .then(data => {
    
                dispatch({
    
                    type: CURRENT_LOCATION,
                    payload: {
                        
                        cityName: data.LocalizedName,
                        key: data.Key
                    }
                })
            }
        )
        .catch( e => console.log(e) )
    })
}


export const setCurrentWeather = () => (dispatch, getStatus) => {

    const {key} = getStatus().selfLocationReducer; // TO GET DATA FROM STORE DIRECTLY

        // API TO FIND THE WEATER BY LOCATION-KEY
        fetch(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${API_KEY}`)
        .then(res => res.json())
        .then(data => {

            dispatch({
    
                type: CURRENT_WEATHER,
                payload: {
                        
                    cWeather: data[0].Temperature.Metric.Value, // C
                    fWeather: data[0].Temperature.Imperial.Value // F
                }
            })
        })
        .catch( e => console.log(e) )
}



export const setSearchedLocationKey = (valueToSearch) => (dispatch) => {

       // API TO FIND THE KEY BY SEARCHED VALUE
       fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${valueToSearch}`)
       .then(res => res.json())
       .then(data => {

            const key = data[0].Key;
            const cityName = data[0].LocalizedName;

            // INNER FUNCTION WITH ANOTHER FETCH INSIDE
            setSearchedWeather(dispatch, key, cityName);
       })
       .catch( e => console.log(e) )
}



export const addToFavorites = () => (dispatch, getStatus) => {

    const {key} = getStatus().searchedLocationReducer;
    const {cityName} = getStatus().searchedLocationReducer;

    if(isAlreadyInFav(key)){

        alert("This location is already exist!!!");

    } else {

        // INNER FUNCTION WITH ANOTHER FETCH INSIDE
        fetchSpecificWeather(dispatch, key, cityName);
    }
}











// INNER FUNCTION !!!

const setSearchedWeather = (dispatch, key, cityName) => {

    // API TO FIND THE WEATER FOR 5 DAY BY KEY VALUE LOCATION
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {

        const {Category} = data.Headline;

        dispatch({

            type: SEARCHED_WEATHER,
            payload: {

                cityName: cityName,
                searchedWeatherKey: key,
                description: Category,
                all5DaysWeather: data.DailyForecasts // An array
            }
        })
    })
    .catch( e => console.log(e) )
}



const fetchSpecificWeather = (dispatch, key, cityName) => {

    // API TO FIND THE WEATER BY LOCATION-KEY
    fetch(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {

        dispatch({

            type: ADD_TO_FAV,
            payload: {

                cityName: cityName,
                key: key,
                cWeather: data[0].Temperature.Metric.Value, // C
                fWeather: data[0].Temperature.Imperial.Value, // F
                weatherText: data[0].WeatherText
            }
        })
    })
    .catch( e => console.log(e) )
}




const isAlreadyInFav = (keyToCheck) => (getFromLocalStorage('favorites')).some(location => location.key === keyToCheck)






