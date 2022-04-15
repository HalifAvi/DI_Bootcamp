

export const setAllRobotsArr = (robotsArr) => {

    return{

        type: 'ALL_ROBOTS_ARRAY',
        payload: robotsArr
    }
}



export const setFilteredRobots = (filteredRobotsArr) => {

    return{

        type: 'FILTERED_ROBOTS_ARRAY',
        payload: filteredRobotsArr
    }
} 


export const setCurrentRobotToDisplay = (robotObj) => {

    return{

        type: 'ROBOT_TO_DISPLAY',
        payload: robotObj
    }
}



