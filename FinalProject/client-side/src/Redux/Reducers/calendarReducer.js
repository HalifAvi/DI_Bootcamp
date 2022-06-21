import {

    SET_SPECIFIC_VALUES_NUTRITION_DATE

} from '../reduxConstants';


const initStateCalendar = {

    currDisplayedProtein : 0,
    currDisplayedIron : 0,
    currDisplayedVitaminC : 0
}


export const calendarReducer = (state=initStateCalendar, action={}) => {

    switch(action.type){

        case SET_SPECIFIC_VALUES_NUTRITION_DATE: 

            return {...state, currDisplayedProtein: action.payload.currDisplayedProtein, currDisplayedIron: action.payload.currDisplayedIron,  currDisplayedVitaminC: action.payload.currDisplayedVitaminC}

        default: 

            return {...state}
    }
}