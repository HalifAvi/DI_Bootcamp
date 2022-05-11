import React, { useContext } from "react";
import { SeachBoxContext } from "./SeachBox";
import BookCard from './BookCard';

// WE WRITE THIS IN THE COMPONENT WE WANT TO SEND HER DATA TO OTHERS
export const BookListContext = React.createContext(null);

const BookList = () => {

    const {books} = useContext(SeachBoxContext);

    let toReturn = null;

    if(books.items !== undefined){

        toReturn =   
        
        (books.items).map((book, idx) => {
                    
            return (
                <div>
                    <BookListContext.Provider value={{book}}>
                        <BookCard key={idx} />
                    </BookListContext.Provider>
                </div>
            )
        })
    }

    return(

        <div>
            {
                toReturn
            }
        </div>
    )
}

export default BookList;