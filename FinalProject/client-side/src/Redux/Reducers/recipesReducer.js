import {

    SET_ALL_DEFAULT_RECIPES_ARRAY,
    GET_TODAY_RECIPES_ARRAY,
    ADD_TO_TODAY_RECIPES_ARRAY

} from '../reduxConstants';


///////////////////////////////// DEMO FETCH!!!
import defaultRecipesFetch from '../../Components/Assistants/defaultRecipesFetch.json';


const initStateRecipes = {

    allDefaultRecipesArray: defaultRecipesFetch, 
    todayRecipes: []
}


export const recipesReducer = (state=initStateRecipes, action={}) => { 
    
    switch(action.type){

        case SET_ALL_DEFAULT_RECIPES_ARRAY: 

        console.log("REDUCER:",action.payload)

            return {...state, allDefaultRecipesArray: action.payload}

        case GET_TODAY_RECIPES_ARRAY: 

            return {...state, todayRecipes: action.payload}

        case ADD_TO_TODAY_RECIPES_ARRAY: 

            (state.todayRecipes).push(action.payload)

            return {...state, todayRecipes: [...state.todayRecipes]}

        default: 

            return {...state}
    }
}