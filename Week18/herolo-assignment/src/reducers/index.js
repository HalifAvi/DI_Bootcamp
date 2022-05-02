import {

    CURRENT_LOCATION,
    CURRENT_WEATHER,
    SEARCHED_KEY,
    SEARCHED_WEATHER

} from '../constants';

const selfLocationState = {
/////////////////////////////// CHANGE EVERYTHING TO EMPTY - HERE JUST FOR TEST!!!
    currentLocation : 'Mass',
    key: 212546,
    cWeather: 18.9,
    fWeather: 66
}

const searchedLocationState = {

    key: '',
    description: '',
    all5DaysWeather: []

}


export const selfLocationReducer = (state=selfLocationState, action={}) => {

    switch(action.type){

        case CURRENT_LOCATION: 

            return { 
                        ...state, currentLocation: action.payload.cityName,
                        key: action.payload.key 
                   }

        case CURRENT_WEATHER: 

            return { 
                        ...state, cWeather: action.payload.cWeather, fWeather: action.payload.fWeather 
                   }

        default:

            return{...state}

    }
}



export const searchedLocationReducer = (state=searchedLocationState, action={}) => {

    switch(action.type){ 

        case SEARCHED_KEY:

            return {...state, key: action.payload}

        case SEARCHED_WEATHER:

            return {...state, description: action.payload.description, all5DaysWeather: action.payload.all5DaysWeather}  

        default:

            return{...state}

    }
}