import {

    SEARCH_MOVIE,
    FETCH_MOVIES,
    FETCH_MOVIE,
    LOADING,
    APIKey
    
} from '../constants';


export const searchMovie = (inputValue) => {

    return {

        type: SEARCH_MOVIE,
        payload: inputValue

    }
} 


export const fetchMovies  = () => (dispatch, getState) => {

    const {text} = getState().fetchMoviesReducer;

    dispatch({
        
                type: LOADING,
                payload: true
            })

        fetch(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
        .then(res=> {
    
            return res.json();
        })
        .then(allMovies=> {
    
            dispatch({
    
                type: FETCH_MOVIES,
                payload: allMovies.Search
            })
        })
        .catch(e=> console.log(e))
} 


export const fetchMovie = (movieID) => (dispatch) => {

    dispatch({

        type: LOADING,
        payload: true
    })

    fetch(`http://www.omdbapi.com/?apikey=${APIKey}&i=${movieID}`)
    .then(res => {

        return res.json();
    })
    .then(movieToDisplay=> {

        dispatch({

            type: FETCH_MOVIE,
            payload: movieToDisplay
        })
    })
    .catch(e => console.log(e))
} 


export const setLoading = () => {

    return{

        type: LOADING,
        payload: false
    }
} 
