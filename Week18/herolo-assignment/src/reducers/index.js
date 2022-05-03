import {

    CURRENT_LOCATION,
    CURRENT_WEATHER,
    SEARCHED_WEATHER,
    ADD_TO_FAV,
    CHANGE_UNITS_HOME,
    CHANGE_UNITS_FAV,
    REMOVE_FAV_CITY

} from '../constants';

import {addToLoacalStorage,getFromLocalStorage} from '../utils/storage';


const homeState = {
/////////////////////////////// CHANGE EVERYTHING TO EMPTY - HERE JUST FOR TEST!!!
    currentLocation : 'Mass',
    currentLocationKey: 212546,
    cWeather: 18.9,
    fWeather: 66,
/////////////////////////////// CHANGE EVERYTHING TO EMPTY - HERE JUST FOR TEST!!!
    cityName: '',
    description: '',
    keySearchedLocation: '',
    displayedUnits: 'C',
    all5DaysWeather: [
    ],
    singleDayIdx: 0
}


const favoritesState = {

    favoritesArray : getFromLocalStorage('favorites'),
    displayedUnits: 'C'
}






export const homeReducer = (state=homeState, action={}) => {

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

        case CHANGE_UNITS_HOME:

                const weatherUnits =  action.payload ? 'F' : 'C';

                return {...state,  displayedUnits: weatherUnits}

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

        case CHANGE_UNITS_FAV:

            const weatherUnits =  action.payload ? 'F' : 'C';
    
            return {...state,  displayedUnits: weatherUnits}

        case REMOVE_FAV_CITY:

                   console.log(action.payload)

                   // REMOVE FROM ARRAY
                   state.favoritesArray.splice(action.payload, 1);

                   // COPY THE NEW ARRAY(WITHOUT THE ELEMENT) TO LOCALSTORAGE
                   addToLoacalStorage('favorites', [...state.favoritesArray]);

                   return {...state, favoritesArray:[...state.favoritesArray]}
                   
        default:

            return{...state}

    }
}



