import React from "react";
import { connect } from "react-redux";

class MovieDetails extends React.Component{


    render(){

        let toRender;

        if(this.props.selectedMovieObj !== null){

            toRender =                     
            <>
                <p>{this.props.selectedMovieObj.title}</p>
                <p>{this.props.selectedMovieObj.releaseDate}</p>
                <p>{this.props.selectedMovieObj.rating}</p>
            </>

        } else {

            toRender = "Select Movie";

        } 

        return(
            <div style={{backgroundColor : "yellow", width: "500px"}}>
                <h1 style={{textAlign : "center"}}>Movie</h1>
                {
                    toRender
                }
            </div>
        )
    }

}


const mapStateToProps = (state) => {

    return{
            selectedMovieObj : state.selectedMovieReducer.selectedMovie
    }
}



export default connect(mapStateToProps, null)(MovieDetails)