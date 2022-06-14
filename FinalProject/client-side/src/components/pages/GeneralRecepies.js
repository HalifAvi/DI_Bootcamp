
import { connect } from 'react-redux';
import React, { useState } from "react";
import '../PagesStyle/GeneralRecepies.css';
import NavBar from "../BasicElements/NavBar";
import CaloriesScale from "../BasicElements/CaloriesScale";
import AppLogo from '../BasicElements/AppLogo';
import SliderCards from '../BasicElements/SliderCards';



const GeneralRecepies = () => {

    const [paintAgainCaloriesBar, setPaintAgainCaloriesBar] = useState(true)

    return(
            <div className={"generalRecepies-div"}>

                <div id={"main-logo-div"}>
                    <AppLogo id={"signinSignUpIntro-logo"} />
                </div> 

                <NavBar numOfPxOnNavBar={process.env.REACT_APP_BASE_PX_POS_ICON_1_NAVBAR+100} positionOnNavBar={1}/> 
            
                {/*Sending this in the props just for set the state and make to CaloriesScale render again*/}
                <SliderCards paramToChange={{setPaintAgainCaloriesBar, paintAgainCaloriesBar}}/>

                <div className={"generalRecepies-caloriesScale-div"}>
                    <CaloriesScale movementNumbers={false}/>
                </div>   
            </div>
        )
    }






export default connect(null, null)(GeneralRecepies);



           


            


    


