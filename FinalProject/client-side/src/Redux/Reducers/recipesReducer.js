import {

    SET_ALL_DEFAULT_RECIPES_ARRAY,
    GET_TODAY_RECIPES_ARRAY,
    ADD_TO_TODAY_RECIPES_ARRAY,
    ADD_TO_FAVORITS_ARRAY,
    SET_SPECIAL_RECIPES_ARRAY,
    SET_CHOOSEN_RECIPES_ARRAY_IDX,
    MORE_RECPIE_DETAILS,
    SET_FAVORITES_RECIPES_ARRAY

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
    choosenDisplayedRecepies : 0,
    caloriesCurrRecpie: 0,
    proteinCurrRecpie: 0,
    ironCurrRecpie: 0, 
    vitaminCCurrRecpie: 0, 
    instructionsCurrRecpie: '', 
    ingredientsCurrRecpie: [],
    titleCurrRecpie: '',
    recipesnCurrRecpie: 0,
    imageCurrRecpie: '',
    allFavoriteRecpies: [] 
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

        case ADD_TO_FAVORITS_ARRAY: 

            console.log("REDUCER ADD TO FAV:", action.payload)

            (state.allFavoriteRecpies).push(action.payload)

            return {...state, allFavoriteRecpies: [...state.allFavoriteRecpies]}

        case SET_CHOOSEN_RECIPES_ARRAY_IDX:

            return {...state, choosenDisplayedRecepies: action.payload}

        case MORE_RECPIE_DETAILS:

            const { calories, protein, iron, vitaminC, instructions, ingredients, title, recipesn, image } = action.payload;

            return {...state, caloriesCurrRecpie: calories, proteinCurrRecpie: protein, ironCurrRecpie: iron, vitaminCCurrRecpie: vitaminC,
                    instructionsCurrRecpie: instructions, ingredientsCurrRecpie: ingredients, titleCurrRecpie: title, recipesnCurrRecpie: recipesn,
                    imageCurrRecpie: image}
        
        case SET_FAVORITES_RECIPES_ARRAY:    

            console.log("FAV ARRAY FROM REDUCER TO UPDATE REDUCER", action.payload);

            return{...state, allFavoriteRecpies: action.payload}

        default: 

            return {...state}
    }
}