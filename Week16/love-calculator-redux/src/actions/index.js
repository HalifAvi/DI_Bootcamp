

// ONE FUNCTION TO BOTH OF THE FUNCTIONS
export const handleChangeName = (type, inputValue) => {

    return{

        type: type,
        payload: inputValue
    }
}



export const displayMatch = (resultsObj) => {

    return{

        type: 'DISPLAY_DATA_FROM_API',
        payload: resultsObj
    }
}



