import{

    SET_BOOKS
    
} from "../constants"


export const fetchData = (txtToSearch) => (dispatch) => {

    if(txtToSearch !== ""){

        fetch(`https://www.googleapis.com/books/v1/volumes?q=${txtToSearch}`)
        .then(res=> res.json())
        .then(data => 
                
            dispatch({
    
                type: SET_BOOKS,
                payload: data
            })
        )
        .catch(e=> console.log(e))
    }
}