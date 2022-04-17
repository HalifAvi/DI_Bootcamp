
export const displayCustomizedCategory = (imagesArr) => {

    return {

        type: 'CUSTOMIZED_CATEGORY',
        payload: imagesArr 
    }
}


export const setCategoryName = (categoryName) => {

    return {

        type: 'SET_CATEGORY_NAME',
        payload: categoryName
    }

}