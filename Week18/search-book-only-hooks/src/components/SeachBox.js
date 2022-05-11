import "./style.css";
import React, {useReducer} from 'react';
import BookList from "./BookList";
import SortDropDown from "./SortDropDown";



// WE WRITE THIS IN THE COMPONENT WE WANT TO SEND HER DATA TO OTHERS
export const SeachBoxContext = React.createContext(null);


// FOR USING THE SAME FUNCTION TO BOTH ACTIONS
function compareYear(order) {

    return function(year1, year2) {

        let comparison = 0;
    
        if (year1.volumeInfo.publishedDate > year2.volumeInfo.publishedDate) {
    
            order === "new" ? comparison = -1 : comparison = 1;
    
        } else if (year1.volumeInfo.publishedDate < year2.volumeInfo.publishedDate) {
    
            order === "new" ? comparison = 1 : comparison = -1;
    
        }
    
        return comparison;
    }

}


const initialState = {

    text: '',
    books: []
}

const reducer = (state, action) => {

    let order;

    switch(action.type){

        case 'CHANGE_TEXT': 
            return {...state, text: action.payload}

        case 'SET_BOOKS':
            return {...state, books: action.payload}

        case 'NewestSort':

            order = "new";

            return {...state, books: (state.books).sort(compareYear(order))}

        case 'OldestSort':

            order = "old";

            return {...state, books: (state.books).sort(compareYear(order))}

        default : 
            return {...state}
    }
}



const SearchBox = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = () => {

        const {text} = state;

        if(text !== ""){

            fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}`)
            .then(res=> res.json())
            .then(data => 
                    
                dispatch({
        
                    type: 'SET_BOOKS',
                    payload: data.items
                })
            )
            .catch(e=> console.log(e))
        }
    }


    const {books} = state;

    return(

        <div className="searchBox-section" style={{marginTop: "120px"}}>
            <input style={{textAlign: "center", marginTop: "20px"}} onChange={(e)=> dispatch({ type: 'CHANGE_TEXT', payload: e.target.value})} type={"text"}/>
            <button onClick={ fetchData }>Search</button>

            <SeachBoxContext.Provider value = {{dispatch}} >
                <SortDropDown /> 
            </SeachBoxContext.Provider>

            <SeachBoxContext.Provider value = {{books}} >
                <BookList />
            </SeachBoxContext.Provider>
        </div>
    )
}




export default SearchBox;