import {

    SET_ALL_DEFAULT_RECIPES_ARRAY

} from '../reduxConstants';




const initStateRecipes = {

    allDefaultRecipesArray: []
}


export const recipesReducer = (state=initStateRecipes, action={}) => {
    
    switch(action.type){

        case SET_ALL_DEFAULT_RECIPES_ARRAY: 

        console.log(action.payload)

            return {...state, allDefaultRecipesArray: action.payload}

        default: 

            return {...state}
    }
}