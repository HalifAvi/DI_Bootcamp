import {

    CURRENT_LOCATION,
    CURRENT_WEATHER,
    SEARCHED_KEY,
    SEARCHED_WEATHER,
    API_KEY

} from '../constants';


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

       // API TO FIND THE WEATER BY SEARCHED VALUE
       fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${valueToSearch}`)
       .then(res => res.json())
       .then(data => {

           dispatch({
   
               type: SEARCHED_KEY,
               payload: data[0].Key
           })
       })
       .catch( e => console.log(e) )
}



export const setSearchedWeather = () => (dispatch, getStatus) => {

    const {key} = getStatus().searchedLocationReducer;

    // console.log(key)

    // API TO FIND THE WEATER FOR 5 DAY BY KEY VALUE LOCATION
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {

        dispatch({

            type: SEARCHED_WEATHER,
            payload: {

                description: (data.Headline).Category,
                all5DaysWeather: data.DailyForecasts // An array
            }
        })
    })
    .catch( e => console.log(e) )
}

