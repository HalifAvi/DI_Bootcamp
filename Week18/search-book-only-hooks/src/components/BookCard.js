import { useContext } from "react";
import { BookListContext } from "./BookList";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const BookCard = () => {

    const {book} = useContext(BookListContext);

    return(

        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} />
                <Card.Body>
                    <Card.Title>{book.volumeInfo.title}</Card.Title>
                    <Card.Text>
                        {book.volumeInfo.authors}<br/>
                        {book.volumeInfo.publishedDate}
                    </Card.Text>
                    <Link to={'/MoreInfo/'+ book.id}>
                        <Button variant="primary">MORE DATA</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BookCard;