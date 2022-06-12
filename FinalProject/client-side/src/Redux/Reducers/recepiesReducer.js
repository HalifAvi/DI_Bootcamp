import {

    SET_ALL_DEFAULT_RECEPIES_ARRAY

} from '../reduxConstants';




const initState = {

    allDefaultRecepiesArray: []
}


export const recepiesReducer = (state=initState, action={}) => {

    switch(action.type){

        case SET_ALL_DEFAULT_RECEPIES_ARRAY: 

        console.log(action.payload)

            return {...state, allDefaultRecepiesArray: action.payload}

        default: 

            return {...state}
    }
}