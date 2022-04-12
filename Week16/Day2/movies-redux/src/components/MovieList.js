import React from "react";
import { connect } from "react-redux";
import {setSelectedMovie} from '../actions/index';

class MovieList extends React.Component{


    render(){

        return(
            <div style={{backgroundColor : "red", width: "500px"}}>
                <h1 style={{textAlign : "center"}}>Movie List</h1>

                {
                    (this.props.moviesObjArr).map((movie, idx) => {

                        return (
                                <>
                                    <h5 style={{display : "inline"}}>{movie.title}</h5>
                                    <button id={idx} onClick={this.props.setSelectedMovie} style={{display : "inline-block", position: "fixed", right: "900px"}}>details</button>
                                    <br/>
                                </>
                        )
                    })
                }
            </div>
        )
    }

}

const mapStateToProps = (state) => {

    return{
            moviesObjArr : state.moviesReducer.movies
    }
}


const mapDispatchToProps = (dispatch) => {
    
    return{

        setSelectedMovie : (event) => dispatch(setSelectedMovie(event.target.id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieList)