import {

    SET_DAILY_CALORIES_AMOUNT

} from '../reduxConstants';




const initState = {

    dailyAmountOfCalories : 0,
    currentAmountOfCalories : 0,
    timerID : 0
}



export const caloriesReducer = (state=initState, action={}) => {

    console.log(action.payload)

    switch(action.type){

        case SET_DAILY_CALORIES_AMOUNT: 

            return {...state, dailyAmountOfCalories: action.payload}

        default: 

            return {...state}
    }
}