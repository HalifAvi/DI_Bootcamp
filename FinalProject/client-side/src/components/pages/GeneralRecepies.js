
import { connect } from 'react-redux';
import React from "react";
import '../PagesStyle/GeneralRecepies.css';
import NavBar from "../BasicElements/NavBar";
import CaloriesScale from "../BasicElements/CaloriesScale";
import AppLogo from '../BasicElements/AppLogo';
import SliderCards from '../BasicElements/SliderCards';



const GeneralRecepies = ({allDefaultRecipesArray}) => {

    return(
            <div className={"generalRecepies-div"}>

                <div id={"main-logo-div"}>
                    <AppLogo id={"signinSignUpIntro-logo"} />
                </div> 

                <NavBar numOfPxOnNavBar={process.env.REACT_APP_BASE_PX_POS_ICON_1_NAVBAR+100} positionOnNavBar={1}/> 
            
                <SliderCards recipesToDisplay={allDefaultRecipesArray}/>

                {/* <div className={"generalRecepies-caloriesScale-div"}>
                    <CaloriesScale/>
                </div>    */}
            </div>
        )
    }



const mapStateToProps = (state) => {

    return{

        allDefaultRecipesArray : state.recipesReducer.allDefaultRecipesArray
    }
}



export default connect(mapStateToProps, null)(GeneralRecepies);



           


            


    


