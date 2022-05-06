import{

    SET_BOOKS
    
} from "../constants"

export const fetchData = (txtToSearch) => (dispatch) => {

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${txtToSearch}`)
    .then(res=> res.json())
    .then(data => 

        console.log(data)
        
        // dispatch({

        //     type: 'SET_BOOKS',
        //     payload: data
        // })
    )
    .catch(e=> console.log(e))
}