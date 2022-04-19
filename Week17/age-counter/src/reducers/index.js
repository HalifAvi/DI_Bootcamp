const initState = {

    age : 20
}

export const reducer = (state=initState, action={}) => {

    switch(action.type){

        case 'AGE_UP' : 
            return {...state, age: 1 + state.age}

        case 'AGE_DOWN' : 
            return {...state, age: -1 + state.age}

        default : return {...state}
    }
}