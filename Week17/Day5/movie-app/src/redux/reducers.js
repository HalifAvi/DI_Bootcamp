import {

    SEARCH_MOVIE,
    FETCH_MOVIES,
    FETCH_MOVIE,
    LOADING
    
} from '../constants';


const moviesState = {

    movies: [],
    loading: false, 
    text: ''
}

const movieState = {

    movie: [],
    loading: false
}


export const fetchMoviesReducer = (state=moviesState, action={}) => {

    switch(action.type){

        case SEARCH_MOVIE: 

        return {...state, text: action.payload}

        case FETCH_MOVIES: 
            
            return {...state, movies: action.payload, loading: false }

        case LOADING:

            return {...state, loading: action.payload}

        default: 
    
            return {...state}
    }
}

export const fetchMovieReducer = (state=movieState, action={}) => {

    switch(action.type){

        case FETCH_MOVIE: 

            return {movie: action.payload, loading: false} 

        default: 
    
            return {...state}
    }
}




 