import {

    SET_ALL_DEFAULT_RECIPES_ARRAY,
    GET_TODAY_RECIPES_ARRAY,
    ADD_TO_TODAY_RECIPES_ARRAY

} from '../reduxConstants';




const initStateRecipes = {

    allDefaultRecipesArray: [],
    todayRecipes: []
}


export const recipesReducer = (state=initStateRecipes, action={}) => {
    
    switch(action.type){

        case SET_ALL_DEFAULT_RECIPES_ARRAY: 

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