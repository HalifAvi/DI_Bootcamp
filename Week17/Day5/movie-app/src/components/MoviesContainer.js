import React from "react";
import {connect} from 'react-redux';
import MovieCard from "./MovieCard";


class MoviesContainer extends React.Component{

    render(){

        let toReturn;

        (this.props.movies === undefined) ?

        toReturn = null :

        toReturn = <div style={{textAlign: "center"}}>
                    {
                        (this.props.movies).map((movie, idx) => {

                            return <MovieCard id={movie.imdbID} key={idx} />
                        })
                    }
                    </div>
        return(

            toReturn
        )
    }
}

const mapStateToProps = (state) => {

    return {

        movies : state.fetchMoviesReducer.movies
    }
}


export default connect(mapStateToProps, null)(MoviesContainer);