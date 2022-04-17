
const initState = {

    currentImageArr : [],
    catergoryName : ''
}

export const reducer = (state=initState, action={}) => {


    switch(action.type){

        case 'CUSTOMIZED_CATEGORY':

            return {...state, currentImageArr: action.payload};

        
        case 'SET_CATEGORY_NAME':

            return {...state, catergoryName : action.payload};

        default: 

            return {...state}
    }
}