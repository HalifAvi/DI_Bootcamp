import axios from 'axios';

import {
    
    SET_ALL_DEFAULT_RECIPES_ARRAY,
    GET_TODAY_RECIPES_ARRAY,
    ADD_TO_TODAY_RECIPES_ARRAY

} from '../reduxConstants';


///////////////////////////////// DEMO FETCH!!!
import defaultRecipesFetch from '../../Components/Assistants/defaultRecipesFetch.json';



export const setAllDefaultRecipesArray = (firstTime) => async (dispatch, getStatus) => {

    const {currentCaloriesAmount} = getStatus().caloriesReducer;
    const {allDefaultRecipesArray} = getStatus().recipesReducer;

    
    let shuffledRecepiesArray = shuffle(allDefaultRecipesArray);

    let updatedRecepiesArray = shuffledRecepiesArray.filter(recipe => (recipe.calories) <= currentCaloriesAmount);


    console.log("ACTIONS:",currentCaloriesAmount)
    console.log("ACTIONS:",updatedRecepiesArray.map(recipe => (recipe.calories)))

            dispatch({
    
                type: SET_ALL_DEFAULT_RECIPES_ARRAY,
                payload: updatedRecepiesArray
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

    // console.log("ACTIONS ALL TODAY RECIPES", allRecipesArray)

    return {

        type: GET_TODAY_RECIPES_ARRAY,
        payload: allRecipesArray
    }
}


export const insertNewAddedRecipe = (recipeObj, userId) => async (dispatch) => {

    try{
        
        let response = await axios.post(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_INSERT_RECIPE_URL,
            {
                recipeObj,
                id : userId
            },
            {
    
            withCredentials: true,
            headers: {
    
                'Access-Control-Allow-Origin' : '*',
                'Content-Type' : 'application/json'
            }
        })

        dispatch({
    
            type: ADD_TO_TODAY_RECIPES_ARRAY,
            payload: response.data
        })
    }
    catch(e){

        console.log(e);
    }
}


const shuffle = (array) => {

    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }















