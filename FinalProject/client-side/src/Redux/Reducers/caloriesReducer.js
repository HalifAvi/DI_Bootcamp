import {

    SET_CALORIES_AMOUNT

} from '../reduxConstants';




const initState = {

    dailyCaloriesAmount : 0,
    currentCaloriesAmount : 0
}



export const caloriesReducer = (state=initState, action={}) => {

    switch(action.type){

        case SET_CALORIES_AMOUNT: 

            return {...state, dailyCaloriesAmount: action.payload.dailyCaloriesAmount, currentCaloriesAmount: action.payload.currentCaloriesAmount}

        default: 

            return {...state}
    }
}