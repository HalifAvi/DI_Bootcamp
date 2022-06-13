import {

    SET_ALL_DEFAULT_RECIPES_ARRAY,
    SET_TODAY_RECIPES_ARRAY

} from '../reduxConstants';




const initStateRecipes = {

    allDefaultRecipesArray: [],
    todayRecipes: []
}


export const recipesReducer = (state=initStateRecipes, action={}) => {
    
    switch(action.type){

        case SET_ALL_DEFAULT_RECIPES_ARRAY: 

            return {...state, allDefaultRecipesArray: action.payload}

        case SET_TODAY_RECIPES_ARRAY: 

        console.log("REDUCER--TODAY RECIPES:", action.payload)

            return {...state, todayRecipes: action.payload}

        default: 

            return {...state}
    }
}