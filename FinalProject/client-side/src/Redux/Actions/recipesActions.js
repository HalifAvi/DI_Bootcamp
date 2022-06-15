import axios from 'axios';

import {
    
    SET_ALL_DEFAULT_RECIPES_ARRAY,
    GET_TODAY_RECIPES_ARRAY,
    ADD_TO_TODAY_RECIPES_ARRAY,
    SET_SPECIAL_RECIPES_ARRAY,
    SET_CHOOSEN_RECIPES_ARRAY_IDX

} from '../reduxConstants';


///////////////////////////////// DEMO FETCH!!!
import defaultRecipesFetch from '../../Components/Assistants/defaultRecipesFetch.json';



export const setToSpecialRecipesArray = () => async (dispatch, getStatus) => {

    const {choosenDisplayedRecepies} = getStatus().recipesReducer;

    const specialArrayToDisplay = getTheSpecialSpecificArray(choosenDisplayedRecepies.toString(), getStatus);

    const {currentCaloriesAmount} = getStatus().caloriesReducer;

    let shuffledRecepiesArray = shuffle(specialArrayToDisplay);

    let updatedRecepiesArray = shuffledRecepiesArray.filter(recipe => recipe.calories === undefined? (recipe.nutrition.nutrients[0].amount).toFixed(0)<= currentCaloriesAmount : recipe.calories <= currentCaloriesAmount);

    dispatch({
    
            type: SET_SPECIAL_RECIPES_ARRAY,
            payload: updatedRecepiesArray
        })
}



export const setChoosenRecepiesArrayIdx = (iconId) => {

    return {

        type: SET_CHOOSEN_RECIPES_ARRAY_IDX,
        payload: iconId
    }
}




export const setAllDefaultRecipesArray = () => async (dispatch, getStatus) => {

    let {currentCaloriesAmount} = getStatus().caloriesReducer;
    let {allDefaultRecipesArray} = getStatus().recipesReducer;

    
    let shuffledRecepiesArray = shuffle(allDefaultRecipesArray);

    let updatedRecepiesArray = shuffledRecepiesArray.filter(recipe => recipe.calories === undefined? (0)<= currentCaloriesAmount : recipe.calories <= currentCaloriesAmount);

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

    return {

        type: GET_TODAY_RECIPES_ARRAY,
        payload: allRecipesArray
    }
}


export const insertNewAddedRecipe = (recipeObj, userId) => async (dispatch) => {

    console.log(recipeObj)

    try{ 

        let objToSend = recipeObj.calories == null ? 
        
            {
                calories : (recipeObj.nutrition.nutrients[0].amount).toFixed(0),
                userid: userId,
                title: recipeObj.title,
                image : recipeObj.image,
                recipesn: recipeObj.id
            }

            :

            {
                calories : recipeObj.calories,
                userid: userId,
                title: recipeObj.title,
                image : recipeObj.image,
                recipesn: recipeObj.id,
                protein: recipeObj.protein,
                fat: recipeObj.fat,
                carbs: recipeObj.carbs
            }

        
        let response = await axios.post(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_INSERT_RECIPE_URL,
            
            objToSend,

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



  const getTheSpecialSpecificArray = (iconId, getStatus) => {

    const {allDefaultRecipesArray, FrenchRecipes, ItalianRecipes, ChineseRecpies, breakfastRecpies, SoupsRecpies, SaladsRecpies, DessertsRecpies, MexicanRecipes} = getStatus().recipesReducer;

    switch(iconId){

        case '0' : 

            return allDefaultRecipesArray;

        case '1' : 

            return MexicanRecipes;

        case '2' :

            return FrenchRecipes;

        case '3' :

            return ItalianRecipes;

        case '4' :

            return ChineseRecpies;
        
        case '5' :

            return breakfastRecpies;

        case '6' : 

            return SoupsRecpies;

        case '7' :

            return SaladsRecpies;

        case '8' :

            return DessertsRecpies;
    }
}



// Italian recpies
// https://api.spoonacular.com/recipes/complexSearch?apiKey=d58baefbd9bf4263946475c94f999e9d&cuisine=Italian&number=50&maxCalories=3000

// French recpies
// https://api.spoonacular.com/recipes/complexSearch?apiKey=d58baefbd9bf4263946475c94f999e9d&cuisine=French&number=50&maxCalories=3000

// Mexican recpies
// https://api.spoonacular.com/recipes/complexSearch?apiKey=d58baefbd9bf4263946475c94f999e9d&cuisine=Mexican&number=50&maxCalories=3000

// Middle Eastern recpies
// https://api.spoonacular.com/recipes/complexSearch?apiKey=d58baefbd9bf4263946475c94f999e9d&cuisine=Middle%20Eastern&number=50&maxCalories=3000

// Chinese 
// https://api.spoonacular.com/recipes/complexSearch?apiKey=d58baefbd9bf4263946475c94f999e9d&cuisine=Chinese&number=50&maxCalories=3000

// dessert
// https://api.spoonacular.com/recipes/complexSearch?apiKey=d58baefbd9bf4263946475c94f999e9d&type=dessert&number=50&maxCalories=3000

// salad
// https://api.spoonacular.com/recipes/complexSearch?apiKey=d58baefbd9bf4263946475c94f999e9d&type=salad&number=50&maxCalories=3000

// soup
// https://api.spoonacular.com/recipes/complexSearch?apiKey=d58baefbd9bf4263946475c94f999e9d&type=soup&number=50&maxCalories=3000

// breakfast
// https://api.spoonacular.com/recipes/complexSearch?apiKey=d58baefbd9bf4263946475c94f999e9d&type=breakfast&number=50&maxCalories=3000






