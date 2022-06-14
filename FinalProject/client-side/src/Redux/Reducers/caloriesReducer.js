import {

    SET_CALORIES_AMOUNT,
    CHANGE_CURRENT_CALORIES_AMOUNT

} from '../reduxConstants';


const initStateCalories = {

    dailyCaloriesAmount : 0,
    currentCaloriesAmount : 0,
    updateserialnumber : 1
}


export const caloriesReducer = (state=initStateCalories, action={}) => {

    switch(action.type){

        case SET_CALORIES_AMOUNT: 

            return {...state, dailyCaloriesAmount: action.payload.dailyCaloriesAmount, currentCaloriesAmount: action.payload.currentCaloriesAmount, updateserialnumber: action.payload.updateserialnumber}

        case CHANGE_CURRENT_CALORIES_AMOUNT:   
        
        console.log(action.payload)

            return {...state, currentCaloriesAmount : action.payload} 

        default: 

            return {...state}
    }
}