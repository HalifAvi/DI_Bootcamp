import "./style.css";
import {useReducer} from 'react';


const initialState = {

    text: '',
    books: []
}

const reducer = (state, action) => {

    switch(action.type){

        case 'CHANGE_TEXT': 
            return {...state, text: action.payload}

        case 'SET_BOOKS':
            return {...state, books: action.payload}

        default : 
            return {...state}
    }
}






const SearchBox = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchData = () => {

        const {text} = state;

        if(text !== ""){

            fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}`)
            .then(res=> res.json())
            .then(data => 
                    
                dispatch({
        
                    type: 'SET_BOOKS',
                    payload: data
                })
            )
            .catch(e=> console.log(e))
        }


    }


    return(

        <div className="searchBox-section">
            <input onChange={(e)=> dispatch({ type: 'CHANGE_TEXT', payload: e.target.value})} type={"text"}/>
            <button onClick={ fetchData }>Search</button>
            {console.log(state.books)}
        </div>
    )
}




export default SearchBox;