import {

    CURRENT_LOCATION,
    B
} from '../constants';


export const setCurrentLocation = () => (dispatch, getStatus) => {

    console.log(dispatch)

    if(!(getStatus().selfLocationReducer.test)){

        navigator.geolocation.getCurrentPosition(()=>success(dispatch), error);
    }
}

export const bbbb = (data) => {

    return {

        type: B,
        action: data
    }
}

const success = (position, dispatch) => {

    console.log(dispatch)

    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=yVjLDUgtb5R3xpkcq9p1kfHvk7l8E17O&q=${latitude},${longitude}`)
    .then(res => res.json())
    .then(data => {

            dispatch({

                type: CURRENT_LOCATION,
                payload: data.LocalizedName
            })
        }
    )
    .catch( e => console.log(e) )
}

const error = () => {

    throw new Error ('Unable to retrieve your location');
  }