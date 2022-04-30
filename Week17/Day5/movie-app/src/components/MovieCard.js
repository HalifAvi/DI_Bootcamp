import React from "react";
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


class MovieCard extends React.Component{

    render(){

        const {id, movies} = this.props;
        const {Title, Poster, Year} = movies.find(movie => movie.imdbID===id); 
        const tagBtt = "More Details>";

        return(  
            <Card style={{ width: '18rem', display: 'inline-block', margin: "20px" }}>
                <Card.Img variant="top" src={Poster} />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                        {Year}
                    </Card.Text>
                    <Link to={'/movie/' + id}>
                        <Button variant="primary">{tagBtt}</Button>
                    </Link>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {

    return {

        movies : state.fetchMoviesReducer.movies
    }
}


export default connect(mapStateToProps, null)(MovieCard);