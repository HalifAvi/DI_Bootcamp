import {

    SET_CALORIES_AMOUNT

} from '../reduxConstants';




export const setAmountOfCalories = ({dailyCaloriesAmount, currentCaloriesAmount}) => {

    return{
    
        type: SET_CALORIES_AMOUNT,
        payload: {dailyCaloriesAmount, currentCaloriesAmount}
    }
}






