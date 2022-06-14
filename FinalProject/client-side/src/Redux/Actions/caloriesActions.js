import {

    SET_CALORIES_AMOUNT,
    CHANGE_CURRENT_CALORIES_AMOUNT

} from '../reduxConstants';

import axios from 'axios';





export const setAmountOfCalories = ({dailyCaloriesAmount, currentCaloriesAmount, updateserialnumber}) => {

    return{
    
        type: SET_CALORIES_AMOUNT,
        payload: {dailyCaloriesAmount, currentCaloriesAmount, updateserialnumber}
    }
}


export const changeCurrentCaloriesAmount = (clickedObjCalories, operation)  => async (dispatch, getStatus) => {

    const {userId} = getStatus().signInUpReducer;
    const {currentCaloriesAmount, dailyCaloriesAmount, updateserialnumber} = getStatus().caloriesReducer;
    let updatedCaloriesAmount;

    if(operation == "-"){

        updatedCaloriesAmount = currentCaloriesAmount - clickedObjCalories 
    }
    else{

        updatedCaloriesAmount = currentCaloriesAmount + clickedObjCalories 
    }

    if(updatedCaloriesAmount >=0 && updatedCaloriesAmount <= dailyCaloriesAmount){

        try{
        
            let response = await axios.put(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_CHANGE_CURR_CALORIES_URL,
                {
                    userid : userId,
                    updatedCalories : updatedCaloriesAmount,
                    updateserialnumber : updateserialnumber
                },
                {
        
                withCredentials: true,
                headers: {
        
                    'Access-Control-Allow-Origin' : '*',
                    'Content-Type' : 'application/json'
                }
            })
    
            dispatch({
        
                type: CHANGE_CURRENT_CALORIES_AMOUNT,
                payload: updatedCaloriesAmount
            })
        }
        catch(e){
    
            console.log(e);
        }
    }
    else{

        dispatch({
        
            type: CHANGE_CURRENT_CALORIES_AMOUNT,
            payload: currentCaloriesAmount
        })
    }
}






