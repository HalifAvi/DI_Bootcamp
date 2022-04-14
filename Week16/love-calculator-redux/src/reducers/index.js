let initState = {

    firstName : '',
    secondName : '',
    results : { percentage : '', result : ''}
}


// const options = {
//     method: 'GET',
//     headers: {
//     'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
//     'X-RapidAPI-Key': '35c70882f2msh5bd980c60ba86cep10f251jsn5463b7d7b519'
//     }
// };

// let percentage;
// let result;


export const reducer = (state=initState, action={}) => {

    switch(action.type){

        case 'CHANGE_FIRST_INPUT_NAME': 

            return {...state, firstName: action.payload};

        case 'CHANGE_SECOND_INPUT_NAME': 

            return {...state, secondName: action.payload};

        case 'DISPLAY_DATA_FROM_API': 

        console.log(action.payload)

            return {...state, results: action.payload }

        // getMatch(state);

            // return {...state, percentage : percentage, result: result};

        default: return {...state};
    }
}




// const getMatch = (state) => {

//     fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${state.secondName}&fname=${state.firstName}`, options)
//     .then(response => response.json())
//     .then(data => {
        
//         percentage = `PERCENTAGE : ${data.percentage}`;
//         result = data.result;
//     })
//     .catch(err => console.error(err));
// }

