import {

    CURRENT_LOCATION,
    B
} from '../constants';

const selfLocationState = {

    test: false,
    currentLocation : 'Tel-Aviv'
}


const searchedLocationState = {



}


export const selfLocationReducer = (state=selfLocationState, action={}) => {


    switch(action.type){

        case CURRENT_LOCATION:

            return {...state, currentLocation: action.payload}

        default:

            return{...state}

    }
}



export const searchedLocationReducer = (state=searchedLocationState, action={}) => {


    switch(action.type){

        case 'B':

            return {...state}

        default:

            return{...state}

    }
}