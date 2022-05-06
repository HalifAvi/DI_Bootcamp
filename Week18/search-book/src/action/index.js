import{

    SET_BOOKS
    
} from "../constants"

export const fetchData = (txtToSearch) => (dispatch) => {

    fetch("")
    .then(res=> res.json())
    .then(data => 
        
        dispatch({

            type: 'SET_BOOKS',
            payload: data
        })
    )
    .catch(e=> console.log(e))
}