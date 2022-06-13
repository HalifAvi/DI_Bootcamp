import axios from 'axios';
import {
    
    SET_ALL_DEFAULT_RECIPES_ARRAY,
    SET_TODAY_RECIPES_ARRAY

} from '../reduxConstants';


///////////////////////////////// DEMO FETCH!!!
import defaultRecipesFetch from '../../Components/Assistants/defaultRecipesFetch.json';





export const setAllDefaultRecipesArray = () => async (dispatch, getStatus) => {

    const {currentCaloriesAmount} = getStatus().caloriesReducer;

            dispatch({
    
                type: SET_ALL_DEFAULT_RECIPES_ARRAY,
                payload: defaultRecipesFetch
            })


    // 2 OPTIONS :

    // fetch(`${process.env.REACT_APP_BASE_RECEPIES_EXT_API_BASE_URL}findByNutrients?${process.env.REACT_APP_BASE_RECEPIES_EXT_API_KEY}&number=${process.env.REACT_APP_BASE_NUM_OF_RECEPIES}&maxCalories=${currentCaloriesAmount}`)
    // .then(res => res.json())
    // .then(data => {

    //         console.log("recipes actions:", data);

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




export const setTodayRecipesArray = (allRecipesArray) => {

    console.log("ACTIONS ALL TODAY RECIPES", allRecipesArray)

    return {

        type: SET_TODAY_RECIPES_ARRAY,
        payload: allRecipesArray
    }
}
















