import { useNavigate } from 'react-router-dom';
import { useState, createContext } from 'react';
import { connect } from 'react-redux';
import React from "react";
import Video from "../BasicElements/Video";
import AppLogo from "../BasicElements/AppLogo";
import Title from "../BasicElements/Title";

import '../PagesStyle/Main.css';


const Main = (props) => {

    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useState('');

    return(

        <div>  
            <Video src={process.env.REACT_APP_BASE_VIDEO_MAIN_URL} id={"signin-back-video"} autoPlay muted loop />
        
            <div id={"main-left-side-div"}>
        
                <div id={"signinSignUpIntro-logo-div"}>
                    <AppLogo id={"signinSignUpIntro-logo"} />
                </div>
        
                <div id={"signinSignUpIntro-snd-title-div"}>
                    <Title id={"signinSignUpIntro-snd-title"} typing={"typewriter"} 
                            titleName={process.env.REACT_APP_SIGNUP_SND_TITLE} />
                </div>    
            </div>
    </div>
    )
}






const mapStateToProps = (state) => {

    return{

        // userId : state.signInUpReducer.userId,
        // email : state.signInUpReducer.email,
        // gender : state.signInUpReducer.gender,
        // firstName : state.signInUpReducer.firstName,
        // lastName : state.signInUpReducer.lastName,
        // age : state.signInUpReducer.age,
        // height : state.signInUpReducer.height,
        // weight : state.signInUpReducer.weight,
        // activityLevel : state.signInUpReducer.activityLevel,
        // fileName : state.signInUpReducer.fileName
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






