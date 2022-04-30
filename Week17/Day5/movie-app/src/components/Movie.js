import React, { useEffect } from 'react';
import { connect } from "react-redux";
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import {fetchMovie} from '../redux/actions';


const Movie = (props) => {

    // FOR REDIRECT
    let navigate = useNavigate();

    // FOR GETTING PARAMS FROM URL
    const params = useParams();

    
    useEffect(() => {
        // code to run on component mount
        props.fetchMovie(params.id)

      }, [])


    return(
            <div className='container'>
                <div style={{border: "1px solid lightgrey", padding: "20px", width: "340px", display: "inline-block"}}><img src={props.movie.Poster}/></div>
                {console.log(props.movie)}
                <div style={{float: "right"}}>
                    <div><h2>{props.movie.Title}</h2></div>
                    <div className="box"><span>{"Genre: "}</span>{props.movie.Genre}</div>
                    <div className="box"><span>{"Released: "}</span>{props.movie.Released}</div>
                    <div className="box"><span>{"Rated: "}</span>{props.movie.Rated}</div>
                    <div className="box"><span>{"IMDB Rating: "}</span>{props.movie.imdbRating}</div>
                    <div className="box"><span>{"Director: "}</span>{props.movie.Director}</div>
                    <div className="box"><span>{"Writer: "}</span>{props.movie.Writer}</div>
                    <div className="box"><span>{"Actors: "}</span>{props.movie.Actors}</div> 
                </div>   
                <div style={{backgroundColor: "#343a40", marginBottom: "50px", color: "white", borderRadius: "5px", width: "1120px", height: "200px", marginTop: "50px"}}>
                    <h1 style={{margin: "30px", paddingTop: "15px"}}>About</h1>
                    <p style={{marginLeft: "30px"}}>{props.movie.Plot}</p>
                    <a style={{marginLeft: "30px", marginRight: "20px", color: "white", backgroundColor: "lightcoral", padding: "10px", borderRadius: "5px", textDecoration: "none"}} href={`https://www.imdb.com/title/${params.id}/`} target={"_blank"}>View on IMDB</a>
                    <button style={{border: "0px solid black", color: "white", backgroundColor: "#343a40"}} onClick={()=>handleClick(navigate)}>Go Back To Search</button>
                </div>    
            </div>
        )
}


const handleClick = (navigate) => {

    // REDIRECT
    navigate("/");
}



const mapStateToProps = (state) => {

    return{

        movie : state.fetchMovieReducer.movie

    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        fetchMovie : (movieID) => dispatch(fetchMovie(movieID))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)






