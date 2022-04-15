let initState = {

    robotsArr : [],
    objsToDisplay : [],
    robotToDisplay : {}
}



export const reducer = (state=initState, action={}) => {

    switch(action.type){

        case 'ALL_ROBOTS_ARRAY': 

            return {...state, robotsArr: action.payload, objsToDisplay: action.payload};

        case 'FILTERED_ROBOTS_ARRAY': 

            return {...state, objsToDisplay: action.payload};

        case 'ROBOT_TO_DISPLAY':

            return {...state, robotToDisplay: action.payload};


        default: return {...state};
    }
}


