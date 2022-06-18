
import { connect } from 'react-redux';
import React from "react";
import '../PagesStyle/todayRecipes.css';
import NavBar from "../BasicElements/NavBar";


const todayRecipes = (props) => {

    return(

        <div id={"aaa"}>  
                     <h1>{"TodayPage"}</h1>

    

            <NavBar numOfPxOnNavBar={process.env.REACT_APP_BASE_PX_POS_ICON_1_NAVBAR+400} positionOnNavBar={4}/>
        </div>
    )
}



const mapStateToProps = (state) => {

    return{

    }
}


export default connect(mapStateToProps, null)(todayRecipes);