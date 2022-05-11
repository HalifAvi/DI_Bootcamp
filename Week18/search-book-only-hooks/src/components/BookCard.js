import { useContext } from "react";
import { BookListContext } from "./BookList";


const BookCard = () => {

    const {book} = useContext(BookListContext);

    console.log(book)

    return(

        <div>
           
        </div>
    )
}

export default BookCard;