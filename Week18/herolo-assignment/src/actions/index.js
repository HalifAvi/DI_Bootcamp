import {

    CURRENT_LOCATION,
    CURRENT_WEATHER
} from '../constants';


export const setCurrentLocation = () => (dispatch) => {

    navigator.geolocation.getCurrentPosition((position) => {

        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        // API TO FIND THE PLACE NAME AND THE LOCATION-KEY BY LAT&LON OF THE LOCATION
        fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=yVjLDUgtb5R3xpkcq9p1kfHvk7l8E17O&q=${latitude},${longitude}`)
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
        fetch(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=yVjLDUgtb5R3xpkcq9p1kfHvk7l8E17O`)
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



export const bbbb = (data) => {

    return {

    }
}

