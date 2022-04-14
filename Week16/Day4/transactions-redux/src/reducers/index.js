

if(localStorage.getItem('transactions') === null){

    let transactions = [];
    localStorage.setItem("transactions", JSON.stringify(transactions));
}


let initialState = {

    currentIndex: -1,
    list: JSON.parse(localStorage.getItem('transactions'))
}


export const reducer = (state=initialState, action={}) => {

    switch(action.type){

        case 'INSERT' : {

            // Update the localstorage with the list
            let objArrFromLocalStorage =  JSON.parse(localStorage.getItem('transactions'));
            objArrFromLocalStorage.push(action.payload);
            localStorage.setItem('transactions', JSON.stringify( objArrFromLocalStorage )); 
                            
            // Update and return list into state
            return {...state, list : JSON.parse(localStorage.getItem('transactions')) } 
        }

        case 'UPDATE' : {

            // Update the localstorage with the list
            let objArrFromLocalStr =  JSON.parse(localStorage.getItem('transactions'));
            objArrFromLocalStr[state.currentIndex] = action.payload;
            localStorage.setItem('transactions', JSON.stringify( objArrFromLocalStr )); 

            return { list : JSON.parse(localStorage.getItem('transactions')), currentIndex: -1 } // back to unedit status 
        }

        case 'UPDATE-INDEX' : 

            return { ...state, currentIndex: action.payload } 

        case 'DELETE' : {
        
            // Update the localstorage with the list
            let objArrFromLocalStorage =  JSON.parse(localStorage.getItem('transactions'));
            objArrFromLocalStorage.splice(action.payload, 1);
            localStorage.setItem('transactions', JSON.stringify( objArrFromLocalStorage )); 

            return {...state, list: JSON.parse(localStorage.getItem('transactions'))}   
        }

        default : 

            return {...state}
    }
}