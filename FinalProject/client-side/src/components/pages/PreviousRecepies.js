
import { connect } from 'react-redux';
import React from "react";
import '../PagesStyle/PreviousRecepies.css';
import NavBar from "../BasicElements/NavBar";


const PreviousRecepies = (props) => {

    return(

        <div id={"aaa"}> 

<h1>{"PreviousRecepies"}</h1>


            <NavBar numOfPxOnNavBar={process.env.REACT_APP_BASE_PX_POS_ICON_1_NAVBAR+300} positionOnNavBar={4}/>
        </div>
    )
}



const mapStateToProps = (state) => {

    return{

    }
}



export default connect(mapStateToProps, null)(PreviousRecepies);