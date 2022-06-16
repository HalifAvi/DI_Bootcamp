import {

    SET_ALL_DEFAULT_RECIPES_ARRAY,
    GET_TODAY_RECIPES_ARRAY,
    ADD_TO_TODAY_RECIPES_ARRAY,
    SET_SPECIAL_RECIPES_ARRAY,
    SET_CHOOSEN_RECIPES_ARRAY_IDX,
    MORE_RECPIE_DETAILS

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
    imageCurrRecpie: ''
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

        case MORE_RECPIE_DETAILS:

            const { calories, protein, iron, vitaminC, instructions, ingredients, title, recipesn, image } = action.payload;

            console.log(action.payload)

            return {...state, caloriesCurrRecpie: calories, proteinCurrRecpie: protein, ironCurrRecpie: iron, vitaminCCurrRecpie: vitaminC,
                    instructionsCurrRecpie: instructions, ingredientsCurrRecpie: ingredients, titleCurrRecpie: title, recipesnCurrRecpie: recipesn,
                    imageCurrRecpie: image}
        
        default: 

            return {...state}
    }
}