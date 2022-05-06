import{

    SET_BOOKS
    
} from "../constants"

const initState = {


}


export const reducer = (state=initState, action={}) => {

    switch(action.type){

        case SET_BOOKS: 
            return {...state}



        default: 
            return {...state}
    }
}