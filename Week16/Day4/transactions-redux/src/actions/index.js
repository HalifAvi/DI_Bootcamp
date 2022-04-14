
export const insert = (transactionObj) => {

    return {
 
        type : 'INSERT',
        payload : transactionObj
    }
}


export const deleteFromList = (id) => {

    return {
 
        type : 'DELETE',
        payload : id
    }
}

export const updateIndex = (index) => {

    return {
 
        type : 'UPDATE-INDEX',
        payload : index
    }
}


export const update = (transactionObj) => {

    console.log(transactionObj)

    return {
 
        type : 'UPDATE',
        payload : transactionObj
    }
}