import {

    DELETE_POST
}
from '../constants';


export const deletePost = (postLocationInArr) => {

    return{

        type: DELETE_POST,
        payload: postLocationInArr
    }
}