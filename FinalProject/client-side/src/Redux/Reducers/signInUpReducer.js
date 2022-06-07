import {

    DISPLAY_SIGNIN_UP_MESSAGE

} from '../reduxConstants';




const initState = {

    messageAfterSign : ''

}



export const signInUpReducer = (state=initState, action={}) => {

    switch(action.type){

        case DISPLAY_SIGNIN_UP_MESSAGE: 

            return {...state, messageAfterSign: action.payload}

        default: 

            return {...state}
    }
}