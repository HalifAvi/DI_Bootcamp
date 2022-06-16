
import { connect } from 'react-redux';
import React, { useState } from "react";
import '../PagesStyle/GeneralRecepies.css';
import NavBar from "../BasicElements/NavBar";
import CaloriesScale from "../BasicElements/CaloriesScale";
import AppLogo from '../BasicElements/AppLogo';
import SliderCards from '../BasicElements/SliderCards';
import Title from '../BasicElements/Title';
import FilterSection from '../BasicElements/FiltersSection';
import axios from 'axios';



const GeneralRecepies = () => {

    const [paintAgainCaloriesBar, setPaintAgainCaloriesBar] = useState(true)



    const fetchSpecInfo = async () => {

        try{

       let response = await axios.get(`${process.env.REACT_APP_BASE_RECEPIES_EXT_API_BASE_URL}663845/information?${process.env.REACT_APP_BASE_RECEPIES_EXT_API_KEY}&includeNutrition=true`);
   
       console.log("recepies actions:", response.data);
   
   
   
   }
   catch(e){
   
       console.log(e);
   }
   }

   

    return(
            <div className={"generalRecepies-div pattern-dots-sm slategray h-5"}>

                <div id={"main-logo-div"}>
                    <AppLogo id={"signinSignUpIntro-logo"} />
                </div> 

                <NavBar numOfPxOnNavBar={process.env.REACT_APP_BASE_PX_POS_ICON_1_NAVBAR+100} positionOnNavBar={1}/> 

                <Title id={"generalRecipes-page-title"} titleName={process.env.REACT_APP_BASE_TITLE_GENERAL_RECIPES}/>

                <FilterSection />
            
                {/* Sending this in the props just for set the state and make to CaloriesScale render again */}
                <SliderCards paramToChange={{setPaintAgainCaloriesBar, paintAgainCaloriesBar}}/>

                <div className={"generalRecepies-caloriesScale-div"}>
                    <CaloriesScale movementNumbers={false}/> 
                </div>    

                <button style={{position: "absolute", bottom: "0px" }} onClick={fetchSpecInfo}>{"Click me"}</button>

            </div>
        )
    }




export default connect(null, null)(GeneralRecepies);





           


            


    


