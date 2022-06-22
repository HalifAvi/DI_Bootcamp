import {

    SET_SPECIFIC_VALUES_NUTRITION_DATE

} from '../reduxConstants';

import axios from 'axios';



export const setSpecificDayUserValuesNutrition = (date, displayedDate) => async (dispatch, getStatus) => {

    const {userId} = getStatus().signInUpReducer;

    let dateToChange = new Date(displayedDate);
    let dateToDisplay= dateToChange.getDate() + '/' + (dateToChange.getMonth() + 1) + '/' + dateToChange.getFullYear();

    try{ 

        let response = await axios.get(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_GET_ALL_SPECIFIC_DATE_USER_RECPIES,
            
            {
                params : {

                    userId : userId,
                    date: date
                }
            },
            {
    
            withCredentials: true,
            headers: {
    
                'Access-Control-Allow-Origin' : '*',
                'Content-Type' : 'application/json'
            }
        })

        const sumValuesNutritionObj = getUserSumValuesNutrition(response.data);

        dispatch({
    
            type: SET_SPECIFIC_VALUES_NUTRITION_DATE,
            payload: {

                displayedDate : dateToDisplay,
                isExistData : sumValuesNutritionObj.isExistData,
                currDisplayedProtein : sumValuesNutritionObj.currDisplayedProtein,
                currDisplayedIron : sumValuesNutritionObj.currDisplayedIron,
                currDisplayedVitaminC : sumValuesNutritionObj.currDisplayedVitaminC
            }
        })
    }
    catch(e){

        console.log(e.message);
    }
}



const getUserSumValuesNutrition = (recipesArr) => {

    let protein = 0;
    let iron = 0;
    let vitaminC = 0;
    let isExistData = false;

    if(recipesArr.length !== 0) {

        isExistData = true;

        recipesArr.forEach(element => {

            protein = element.recipehowmanyadded > 1 ? protein + (element.recipehowmanyadded)*(convertToGramUnit(element.recipeprotein, element.recipeunitprotein)) : protein + convertToGramUnit(element.recipeprotein, element.recipeunitprotein);
            iron = element.recipehowmanyadded > 1 ? iron + (element.recipehowmanyadded)*(convertToGramUnit(element.recipeiron, element.recipeunitiron)) : iron + convertToGramUnit(element.recipeiron, element.recipeunitiron);
            vitaminC = element.recipehowmanyadded > 1 ? vitaminC + (element.recipehowmanyadded)*(convertToGramUnit(element.recipevitaminc, element.recipeunitvitaminc)) : vitaminC + convertToGramUnit(element.recipevitaminc, element.recipeunitvitaminc);
        });
    }

    return {

        isExistData : isExistData,
        currDisplayedProtein: (protein).toFixed(2),
        currDisplayedIron : (iron).toFixed(2),
        currDisplayedVitaminC : (vitaminC).toFixed(2)
    }
}


const convertToGramUnit = (amount, unit) => {

    let amountToRet = amount;

    if(unit == "µg") {

        amountToRet = amount/10000000;

    } else if(unit == "mg") {

        amountToRet = amount/1000;
    } 

    return amountToRet;
}

