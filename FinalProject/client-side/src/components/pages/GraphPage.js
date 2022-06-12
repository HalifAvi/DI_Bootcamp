
import { connect } from 'react-redux';
import React from "react";
import '../PagesStyle/GraphPage.css';
import NavBar from "../BasicElements/NavBar";


const GraphPage = (props) => {

    return(

        <div id={"aaa"}>  
                     <h1>{"GraphPage"}</h1>

    

            <NavBar numOfPxOnNavBar={process.env.REACT_APP_BASE_PX_POS_ICON_1_NAVBAR+600} positionOnNavBar={6}/>
        </div>
    )
}



const mapStateToProps = (state) => {

    return{

    }
}



export default connect(mapStateToProps, null)(GraphPage);