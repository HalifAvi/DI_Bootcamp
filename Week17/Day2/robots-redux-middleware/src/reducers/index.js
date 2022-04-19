import {

    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
    
} from '../constants';


let initStateSearch = {

    searchField : ''
}


let initStateRequest = {

    robotsArr : [],
    isPending : false,
    error : '',
    loading: true
}



export const searchRobotsReducer = (state=initStateSearch, action={}) => {

    switch(action.type){

        case CHANGE_SEARCH_FIELD: 

            return {...state, searchField: action.payload};

        default: return {...state};
    }
}




export const requestRobotsReducer = (state=initStateRequest, action={}) => {

    switch(action.type){

        case REQUEST_ROBOTS_SUCCESS: 

            return {...state, isPending: false, robotsArr: action.payload, loading: action.loading};
        
        case REQUEST_ROBOTS_PENDING: 

            return {...state, isPending: true};

        case REQUEST_ROBOTS_FAILED: 

            return {...state, isPending: false, error: action.payload};

        default: return {...state};
    }
}