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

    cities : [],
    deletePrevious: true
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
        
            return {...state, cities: action.payload, deletePrevious: action.deletePrevious};

        case REQUEST_CITIES_PENDING: 
        
            return {...state,  cities: [] };

        case REQUEST_CITIES_FAILED: 
        
            return {...state, deletePrevious: action.deletePrevious};


        default : 

            return {...state};
    }  
} 


