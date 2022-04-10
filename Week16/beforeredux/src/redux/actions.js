export const changePropOne = (value) => {

    return {

        type : 'PROP_ONE',
        payload : value
    }
}



export const changePropTwo = (value) => {

    return {

        type : 'PROP_TWO',
        payload : value
    }
}


export const clickOnAButton = () => {

    return {

        type : 'CLICK_MY_BUTTON'    }
}