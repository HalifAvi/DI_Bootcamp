const initState = {



}

export const personalizedReducer = (state=initState, action={}) => {

    switch(action.type){

        case 'AAA': 
            return {...state}

        default: 
            return {...state}
    }
}