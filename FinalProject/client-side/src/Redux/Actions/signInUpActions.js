import {

    DISPLAY_SIGNIN_UP_MESSAGE,
    SET_ALL_USER_DETAILS

} from '../reduxConstants';




export const setMessageAfterSign = (messageToSet) => {

  return{

    type : DISPLAY_SIGNIN_UP_MESSAGE,
    payload : messageToSet
  }
}


export const setAllUserParamsFromDb = (allUserParamsObj) => {

  return{

    type: SET_ALL_USER_DETAILS,
    payload : allUserParamsObj
  }
}

