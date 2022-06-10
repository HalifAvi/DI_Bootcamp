
import { connect } from 'react-redux';
import React from "react";
import Video from "../BasicElements/Video";
import AppLogo from "../BasicElements/AppLogo";
import Title from "../BasicElements/Title";
import PersonalDetailsCard from "../BasicElements/PersonalDetailsCard";
import '../PagesStyle/Main.css';
import {getCurrentDate} from "../Assistants/MainExtFunctions.js";


const Main = (props) => {

    return(

        <div>  

            <Video src={process.env.REACT_APP_BASE_VIDEO_MAIN_URL} id={"signin-back-video"} autoPlay muted loop />
        
            <div id={"main-left-side-div"}>
        
                <div id={"main-logo-div"}>
                    <AppLogo id={"signinSignUpIntro-logo"} />
                </div>

                <Title id={"date-currentDate-title"} titleName={getCurrentDate()} />

                <PersonalDetailsCard />
        
                <div id={"main-snd-title-div"}>
                    <Title id={"main-snd-title"} typing={"typewriter"} 
                            titleName={process.env.REACT_APP_MAIN_SND_TITLE} />
                </div>    
            </div>
    </div>
    )
}



const mapStateToProps = (state) => {

    return{

        firstName : state.signInUpReducer.firstName,
        dailyAmountOfCalories : state.caloriesReducer.dailyAmountOfCalories
    }
}



export default connect(mapStateToProps, null)(Main);



    //     <>
    //     <h1>MAIN</h1>
    //     <button>Logout</button>
    //     <button onClick={()=>{navigate("/protected")}}>Protected</button>

        
    //         {props.userId}<br/>
    //         {props.email}<br/>
    //         {props.gender}<br/>
    //         {props.firstName}<br/>
    //         {props.lastName}<br/>
    //         {props.age}<br/>
    //         {props.height}<br/>
    //         {props.weight}<br/>
    //         {props.activityLevel}<br/>
    //         {props.fileName}<br/>
    //         <img style={{width: "100px", height: "100px"}} src={`http://localhost:5000/uploads/${props.fileName}`}/>

    // </>






