let initState = {

    propOne: 'one from store',
    propTwo: 'two from store',
    propThree: ''
}


export const reducer = (state=initState, action={}) => {

    switch(action.type){

        case 'PROP_ONE':
            return {...state, propOne:action.payload}

        case 'PROP_TWO':
            return {...state, propTwo:action.payload}

        case 'CLICK_MY_BUTTON':
            return {...state, propThree:state.propOne+state.propTwo}
        
        default : 
            return {...state}
    }
} 