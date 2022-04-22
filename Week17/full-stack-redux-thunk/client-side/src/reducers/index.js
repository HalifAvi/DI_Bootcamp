import {

    SET_COUNTRIES,
    REQUEST_CITIES_PENDING,
    REQUEST_CITIES_SUCCESS,
    REQUEST_CITIES_FAILED

} from '../constants'



const initStateCountries = {

    countries : []
}


const initStateCities = {

    cities : []
}



export const countriesReducer = (state=initStateCountries, action={}) => {

    switch(action.type){

        case SET_COUNTRIES: 
        
            return {...state, countries: action.payload};


        default : 

            return {...state};
    }
}

export const citiesReducer = (state=initStateCities, action={}) => {

    switch(action.type){

        case REQUEST_CITIES_SUCCESS: 
        
            return {...state, cities: action.payload};

        case REQUEST_CITIES_PENDING: 
        
            return {...state,  cities: [] }; // MAKE THE CITIES SELECT ELEMENT CLEAR BEFORE CHOOSING NEW COUNTRY

        case REQUEST_CITIES_FAILED: 
        
            return {...state};


        default : 

            return {...state};
    }  
} 


