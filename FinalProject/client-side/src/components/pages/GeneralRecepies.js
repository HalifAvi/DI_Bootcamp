
import { connect } from 'react-redux';
import React from "react";
import '../PagesStyle/GeneralRecepies.css';
import NavBar from "../BasicElements/NavBar";
// import CaloriesScale from "../BasicElements/CaloriesScale";
// import AppLogo from '../BasicElements/AppLogo';
import SliderCards from '../BasicElements/SliderCards';



const GeneralRecepies = (props) => {



    return(
            <div>
                <NavBar numOfPxOnNavBar={process.env.REACT_APP_BASE_PX_POS_ICON_1_NAVBAR+100} positionOnNavBar={1}/> 

                <SliderCards/>
            </div>
        )
    }



const mapStateToProps = (state) => {

    return{

    }
}



export default connect(mapStateToProps, null)(GeneralRecepies);

        {/* <NavBar numOfPxOnNavBar={process.env.REACT_APP_BASE_PX_POS_ICON_1_NAVBAR+100} positionOnNavBar={1}/> */}


            {/* <div id={"main-logo-div"}>
                <AppLogo id={"signinSignUpIntro-logo"} />
            </div> */}
{/* 
            <div id={"generalRecepies-caloriesScale-div"}>
                <CaloriesScale/>
            </div> */}

            


    


