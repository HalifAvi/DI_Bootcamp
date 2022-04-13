export const handleChangeFirstName = (inputValue) => {

    return{

        type: 'CHANGE_FIRST_INPUT_NAME',
        payload: inputValue
    }
}

export const handleChangeSecondName = (inputValue) => {

    return{

        type: 'CHANGE_SECOND_INPUT_NAME',
        payload: inputValue
    }
}

export const displayMatch = () => {

    return{

        type: 'DISPLAY_DATA_FROM_API',
    }
}

