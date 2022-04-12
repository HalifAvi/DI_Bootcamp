
import { combineReducers } from 'redux'
import { moviesReducer } from './moviesReducer'
import { selectedMovieReducer } from './selectedMovieReducer'


const rootReducer = combineReducers({
	
    moviesReducer : moviesReducer,
    selectedMovieReducer : selectedMovieReducer
})

export default rootReducer;




