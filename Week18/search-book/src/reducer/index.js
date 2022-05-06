import{

    SET_BOOKS
    
} from "../constants"

const initState = {

    books: []
}


export const reducer = (state=initState, action={}) => {

    switch(action.type){

        case SET_BOOKS: 

            return {...state, books: action.payload}



        default: 
            return {...state}
    }
}