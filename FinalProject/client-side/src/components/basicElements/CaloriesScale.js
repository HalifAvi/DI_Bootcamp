import '../BasicElementStyle/CaloriesScale.css';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { getColor, setCircleInterval } from "../Assistants/CaloriesScaleExtFunctions.js";
import Image from "../BasicElements/Image";



const CaloriesScale = ({dailyCaloriesAmount, currentCaloriesAmount}) => {


    const percentCaloriesAmount = currentCaloriesAmount/dailyCaloriesAmount;
    const [color, setColor] = useState('');

    useEffect(()=> {

        setCircleInterval(dailyCaloriesAmount, currentCaloriesAmount, percentCaloriesAmount);

        let calNum = document.querySelector('div#caloriesScale-number-div');

        let color = getColor(percentCaloriesAmount);

        calNum.setAttribute("style", `color: ${color}`);

        setColor(color);

    }, [])


    return(
        <div className={"caloriesScale-skill-div"}>
            <div className={"caloriesScale-outer-div"}>
                <div className={"caloriesScale-inner-div"}>
                    <div id={"caloriesScale-number-div"}>
                    </div>
                </div>
            </div>
            {console.log("1")}
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={"1600px"} height={"1600px"}>
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color={color}/>
                        <stop offset="100%" stop-color={color}/>
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

        dailyCaloriesAmount : state.caloriesReducer.dailyCaloriesAmount,
        currentCaloriesAmount : state.caloriesReducer.currentCaloriesAmount
    }
}


export default connect(mapStateToProps, null)(CaloriesScale);