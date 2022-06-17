import { connect } from 'react-redux';
import React, { useState } from "react";
import '../PagesStyle/FavoritesRecepies.css';
import NavBar from "../BasicElements/NavBar";
import CaloriesScale from "../BasicElements/CaloriesScale";
import AppLogo from '../BasicElements/AppLogo';
import SliderCards from '../BasicElements/SliderCards';
import Title from '../BasicElements/Title';
import FilterSection from '../BasicElements/FiltersSection';



const FavoritesRecepies = () => {

    const [paintAgainCaloriesBar, setPaintAgainCaloriesBar] = useState(true)

    return(
            <div className={"favoritesRecepies-div pattern-dots-sm slategray h-5"}>

                <div id={"main-logo-div"}>
                    <AppLogo id={"signinSignUpIntro-logo"} />
                </div> 

                <NavBar numOfPxOnNavBar={process.env.REACT_APP_BASE_PX_POS_ICON_1_NAVBAR+200} positionOnNavBar={1}/> 

                <Title id={"favoritesRecepies-page-title"} titleName={process.env.REACT_APP_BASE_TITLE_FAV_RECIPES}/>
            
                <SliderCards kindOfPage={"fav"}/>

                <div className={"favoritesRecepies-caloriesScale-div"}>
                    <CaloriesScale movementNumbers={false}/> 
                </div>    

            </div>
        )
    }




export default connect(null, null)(FavoritesRecepies);



