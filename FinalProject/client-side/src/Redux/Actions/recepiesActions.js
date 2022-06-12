import axios from 'axios';
import {

    SET_ALL_DEFAULT_RECEPIES_ARRAY

} from '../reduxConstants';


///////////////////////////////// DEMO FETCH!!!
import defaultRecepiesFetch from '../../Components/Assistants/defaultRecepiesFetch.json';





export const setAllDefaultRecepiesArray = () => async (dispatch, getStatus) => {

    const {currentCaloriesAmount} = getStatus().caloriesReducer;

            dispatch({
    
                type: SET_ALL_DEFAULT_RECEPIES_ARRAY,
                payload: defaultRecepiesFetch
            })


    // 2 OPTIONS :

    // fetch(`${process.env.REACT_APP_BASE_RECEPIES_EXT_API_BASE_URL}findByNutrients?${process.env.REACT_APP_BASE_RECEPIES_EXT_API_KEY}&number=${process.env.REACT_APP_BASE_NUM_OF_RECEPIES}&maxCalories=${currentCaloriesAmount}`)
    // .then(res => res.json())
    // .then(data => {

    //         console.log("recepies actions:", data);

    //         dispatch({
    
    //             type: SET_ALL_DEFAULT_RECEPIES_ARRAY,
    //             payload: data
    //         })
    // })
    // .catch( e => console.log(e) )




    // try{

    //     let response = await axios.get(`${process.env.REACT_APP_BASE_RECEPIES_EXT_API_BASE_URL}findByNutrients?${process.env.REACT_APP_BASE_RECEPIES_EXT_API_KEY}&number=${process.env.REACT_APP_BASE_NUM_OF_RECEPIES}&maxCalories=${currentCaloriesAmount}`);
    
    //     console.log("recepies actions:", response.data);
    
    //     dispatch({
    
    //         type: SET_ALL_DEFAULT_RECEPIES_ARRAY,
    //         payload: response.data
    //     })
    
    
    // }
    // catch(e){
    
    //     console.log(e);
    // }
}














