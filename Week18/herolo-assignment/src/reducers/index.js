import {

    CURRENT_LOCATION,
    CURRENT_WEATHER,
    SEARCHED_WEATHER,
    ADD_TO_FAV

} from '../constants';

import {addToLoacalStorage,getFromLocalStorage} from '../utils/storage';


const selfLocationState = {
/////////////////////////////// CHANGE EVERYTHING TO EMPTY - HERE JUST FOR TEST!!!
    currentLocation : 'Mass',
    key: 212546,
    cWeather: 18.9,
    fWeather: 66
}

const searchedLocationState = {
/////////////////////////////// CHANGE EVERYTHING TO EMPTY - HERE JUST FOR TEST!!!
    cityName: '',
    description: '',
    key: '',
    all5DaysWeather: [
    ],
    singleDayIdx: 0

}

const favoritesState = {

    favoritesArray : getFromLocalStorage('favorites')
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

        case SEARCHED_WEATHER:

            return { ...state,
                    description: action.payload.description,
                    all5DaysWeather: action.payload.all5DaysWeather,
                    key: action.payload.searchedWeatherKey,
                    cityName: action.payload.cityName }  
    
        default:

            return{...state}
    }
}


export const favoritesReducer = (state=favoritesState, action={}) => {

    switch(action.type){

        case ADD_TO_FAV: 

        // ADD TO ARRAY
            state.favoritesArray.push({

                key: action.payload.key,
                cityName: action.payload.cityName,
                cWeather: action.payload.cWeather,
                fWeather: action.payload.fWeather,
                description: action.payload.weatherText
            });

        // ADD TO LOCAL STORAGE
            addToLoacalStorage('favorites', [...state.favoritesArray]);

            return {...state, favoritesArray: [...state.favoritesArray]}

        case CURRENT_WEATHER: 

            return { 
                        ...state, cWeather: action.payload.cWeather, fWeather: action.payload.fWeather 
                   }

        default:

            return{...state}

    }
}


