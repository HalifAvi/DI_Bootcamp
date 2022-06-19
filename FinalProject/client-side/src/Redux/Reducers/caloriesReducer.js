import {

    SET_CALORIES_AMOUNT,
    CHANGE_CURRENT_CALORIES_AMOUNT,
    SET_OPERATION

} from '../reduxConstants';


const initStateCalories = {

    dailyCaloriesAmount : 0,
    currentCaloriesAmount : 0,
    updateserialnumber : 1,
    currentOperation : '-'
}


export const caloriesReducer = (state=initStateCalories, action={}) => {

    switch(action.type){

        case SET_CALORIES_AMOUNT: 

            return {...state, dailyCaloriesAmount: action.payload.dailyCaloriesAmount, currentCaloriesAmount: action.payload.currentCaloriesAmount, updateserialnumber: action.payload.updateserialnumber}

        case CHANGE_CURRENT_CALORIES_AMOUNT:   
        
            return {...state, currentCaloriesAmount : action.payload} 

        case SET_OPERATION:   
        
            return {...state, currentOperation : action.payload} 

        default: 

            return {...state}
    }
}