
import { connect } from 'react-redux';
import React from "react";
import '../PagesStyle/SpecificRecepies.css';
import NavBar from "../BasicElements/NavBar";


const SpecificRecepies = (props) => {

    return(

        <div id={"aaa"}> 

<h1>{"SpecificRecepies"}</h1>


            <NavBar numOfPxOnNavBar={process.env.REACT_APP_BASE_PX_POS_ICON_1_NAVBAR+200} positionOnNavBar={2}/>
        </div>
    )
}



const mapStateToProps = (state) => {

    return{

    }
}



export default connect(mapStateToProps, null)(SpecificRecepies);