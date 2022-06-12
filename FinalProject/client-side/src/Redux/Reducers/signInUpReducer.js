import {

    DISPLAY_SIGNIN_UP_MESSAGE,
    SET_ALL_USER_DETAILS

} from '../reduxConstants';




const initStateSignInUp = {

    messageAfterSign : '',
    userId : '',
    email : '',
    gender : '',
    firstName : '',
    lastName : '',
    age : '',
    height : '',
    weight : '',
    activityLevel : '',
    fileName : ''
}



export const signInUpReducer = (state=initStateSignInUp, action={}) => {

    switch(action.type){

        case DISPLAY_SIGNIN_UP_MESSAGE: 

            return {...state, messageAfterSign: action.payload}

        case SET_ALL_USER_DETAILS:

            return {...state, userId: action.payload.userId, email: action.payload.email, gender: action.payload.gender,
                    firstName: action.payload.firstName, lastName: action.payload.lastName, age: action.payload.age,
                    height: action.payload.height, weight: action.payload.weight, activityLevel: action.payload.activityLevel,
                    fileName: action.payload.fileName}

        default: 

            return {...state}
    }
}