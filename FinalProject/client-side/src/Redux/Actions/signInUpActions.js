import {

    DISPLAY_SIGNIN_UP_MESSAGE

} from '../reduxConstants';




export const setMessageAfterSign = (messageToSet) => {

    console.log(messageToSet)

  return{

    type : DISPLAY_SIGNIN_UP_MESSAGE,
    payload : messageToSet
  }
}

