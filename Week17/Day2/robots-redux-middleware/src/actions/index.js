import {

    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED

} from '../constants';


export const setSearchField = (inputVlue) => {

    return{

        type: CHANGE_SEARCH_FIELD,
        payload: inputVlue
    }
} 


export const fetchDataFromAPI = (dispatch) => {

    dispatch({type: REQUEST_ROBOTS_PENDING})

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>{

      dispatch({

        type: REQUEST_ROBOTS_SUCCESS,
        payload: data,
        loading: false

      })

      

    })
    .catch(error => dispatch({
      
        type: REQUEST_ROBOTS_FAILED,
        payload: error

    }))
}




