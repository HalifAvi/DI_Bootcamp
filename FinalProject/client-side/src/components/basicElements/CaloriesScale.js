import '../BasicElementStyle/CaloriesScale.css';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getColor, setCircleInterval } from "../Assistants/CaloriesScaleExtFunctions.js";
import Image from "../BasicElements/Image";



const CaloriesScale = ({dailyAmountOfCalories, currentAmountOfCalories}) => {

    /////////////////////////////////////
    currentAmountOfCalories = 1300;
    /////////////////////////////////////

    const percentCaloriesAmount = currentAmountOfCalories/dailyAmountOfCalories;


    useEffect(()=> {

        setCircleInterval(dailyAmountOfCalories, currentAmountOfCalories, percentCaloriesAmount);

    }, [])


    return(
        <div className={"caloriesScale-skill-div"}>
            <div className={"caloriesScale-outer-div"}>
                <div className={"caloriesScale-inner-div"}>
                    <div id={"caloriesScale-number-div"}>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={"1600px"} height={"1600px"}>
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color={getColor(percentCaloriesAmount)}/>
                        <stop offset="100%" stop-color={getColor(percentCaloriesAmount)}/>
                    </linearGradient>  
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>
            <Image id={"caloriesScale-img"} src={process.env.REACT_APP_BASE_CALORIES_ICON_URL}/>
        </div>
    )
}





const mapStateToProps = (state) => {

    return {

        dailyAmountOfCalories : state.caloriesReducer.dailyAmountOfCalories,
        currentAmountOfCalories : state.caloriesReducer.currentAmountOfCalories
    }
}


export default connect(mapStateToProps, null)(CaloriesScale);