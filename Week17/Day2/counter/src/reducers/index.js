
const initState = {

    count: 0
}


export const reducer = (state=initState, action={}) => {

    switch (action.type) {

        case 'INCREMENT': 
            return {...state, count : 1 + state.count}

        case 'DECREMENT': 
            return {...state, count : -1 + state.count}




        default: return {...state}

    }
}