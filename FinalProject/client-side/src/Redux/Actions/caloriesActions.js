import {

    SET_CALORIES_AMOUNT,
    DECREASE_CURRENT_CALORIES_AMOUNT

} from '../reduxConstants';




export const setAmountOfCalories = ({dailyCaloriesAmount, currentCaloriesAmount}) => {

    return{
    
        type: SET_CALORIES_AMOUNT,
        payload: {dailyCaloriesAmount, currentCaloriesAmount}
    }
}


export const decreaseCaloriesFromCurrent = (caloriesAmount) => {

    return{

        type: DECREASE_CURRENT_CALORIES_AMOUNT,
        payload: caloriesAmount
    }
}





