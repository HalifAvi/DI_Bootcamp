import {

    SET_CALORIES_AMOUNT,
    DECREASE_CURRENT_CALORIES_AMOUNT

} from '../reduxConstants';


const initStateCalories = {

    dailyCaloriesAmount : 0,
    currentCaloriesAmount : 0
}


export const caloriesReducer = (state=initStateCalories, action={}) => {

    switch(action.type){

        case SET_CALORIES_AMOUNT: 

            return {...state, dailyCaloriesAmount: action.payload.dailyCaloriesAmount, currentCaloriesAmount: action.payload.currentCaloriesAmount}

        case DECREASE_CURRENT_CALORIES_AMOUNT: 

            const updatedCurrentCalories = state.currentCaloriesAmount - action.payload >= 0 ? state.currentCaloriesAmount - action.payload : state.currentCaloriesAmount;

            console.log(updatedCurrentCalories)
            
            return {...state, currentCaloriesAmount : updatedCurrentCalories} 

        default: 

            return {...state}
    }
}