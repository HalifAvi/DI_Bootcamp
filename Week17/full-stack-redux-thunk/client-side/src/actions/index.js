import {

    SET_COUNTRIES,
    REQUEST_CITIES_PENDING,
    REQUEST_CITIES_SUCCESS,
    REQUEST_CITIES_FAILED

} from '../constants'




export const fetchCountries = () => async (dispatch) => {

    try{

        const res = await fetch(`http://localhost:5000/countries`);
        const data = await res.json();

        dispatch({

            type: SET_COUNTRIES,
            payload: data
        })
    }
    catch (e){

        console.log(e);
    }
}



export const fetchCities = (countryID) => async (dispatch) => {

    try{

        dispatch({type: REQUEST_CITIES_PENDING })

        const res = await fetch(`http://localhost:5000/cities/${countryID}`);
        const data = await res.json();

        dispatch({

            type: REQUEST_CITIES_SUCCESS,
            payload: data
        })
    }
    catch (error){

            dispatch({
      
            type: REQUEST_CITIES_FAILED,
            payload: error    
        })
    }
}

