import {

    SET_ALL_DEFAULT_RECIPES_ARRAY,
    GET_TODAY_RECIPES_ARRAY,
    ADD_TO_TODAY_RECIPES_ARRAY,
    SET_SPECIAL_RECIPES_ARRAY,
    SET_CHOOSEN_RECIPES_ARRAY_IDX

} from '../reduxConstants';


///////////////////////////////// DEMO FETCH!!!
import defaultRecipesFetch from '../../Components/Assistants/defaultRecipesFetch.json';

import breakfastRecpies from '../../Components/Assistants/breakfastRecpies.json';
import ChineseRecpies from '../../Components/Assistants/ChineseRecpies.json';
import DessertsRecpies from '../../Components/Assistants/DessertsRecpies.json';
import FrenchRecipes from '../../Components/Assistants/FrenchRecipes.json';
import ItalianRecipes from '../../Components/Assistants/ItalianRecipes.json';
import MexicanRecipes from '../../Components/Assistants/MexicanRecipes.json';
import SaladsRecpies from '../../Components/Assistants/SaladsRecpies.json';
import SoupsRecpies from '../../Components/Assistants/SoupsRecpies.json';



const initStateRecipes = {

    allDefaultRecipesArray: defaultRecipesFetch, 
    FrenchRecipes: FrenchRecipes,
    ItalianRecipes: ItalianRecipes,
    ChineseRecpies: ChineseRecpies,
    breakfastRecpies: breakfastRecpies,
    SoupsRecpies: SoupsRecpies,
    SaladsRecpies: SaladsRecpies,
    DessertsRecpies: DessertsRecpies,
    MexicanRecipes: MexicanRecipes,
    currentDisplayedRecepies : defaultRecipesFetch,
    todayRecipes: [],
    choosenDisplayedRecepies : 0
}


export const recipesReducer = (state=initStateRecipes, action={}) => { 
    
    switch(action.type){

        case SET_ALL_DEFAULT_RECIPES_ARRAY: 

            return {...state, currentDisplayedRecepies: action.payload, choosenDisplayedRecepies: 0}

        case SET_SPECIAL_RECIPES_ARRAY: 

            return {...state, currentDisplayedRecepies: action.payload}

        case GET_TODAY_RECIPES_ARRAY: 

            return {...state, todayRecipes: action.payload}

        case ADD_TO_TODAY_RECIPES_ARRAY: 

            (state.todayRecipes).push(action.payload)

            return {...state, todayRecipes: [...state.todayRecipes]}

        case SET_CHOOSEN_RECIPES_ARRAY_IDX:

            return {...state, choosenDisplayedRecepies: action.payload}
        
        default: 

            return {...state}
    }
}