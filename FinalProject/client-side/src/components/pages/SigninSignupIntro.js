import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import axios from 'axios';
import {toast} from "react-toastify";

import Title from "../BasicElements/Title";
import '../PagesStyle/SigninSignupIntro.css';
import Video from "../BasicElements/Video";
import AppLogo from "../BasicElements/AppLogo";
import Image from "../BasicElements/Image";
import SigninSignupForm from './SigninSignupForm.js';




const SigninSignupIntro = ({pageToDisplay}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [activityLevel, setActivityLevel] = useState('');
    const [message, setMessage] = useState('');

    
    const navigate = useNavigate();

    useEffect(()=>{

        // setMessage(''); // Delete the message when mounting

    }, [])


    const handleAction = async (pageToDisplay) => {

        if(pageToDisplay === process.env.REACT_APP_SIGN_UP_NAME){

            try{ 

                let response = await axios.post(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_SIGN_UP_URL,{
                    email, 
                    password,
                    firstName,
                    lastName, 
                    age,
                    height, 
                    weight,
                    gender, 
                    activityLevel
                },{

                    withCredentials: true,
                    headers: {

                        'Access-Control-Allow-Origin' : '*',
                        'Content-Type' : 'application/json'
                    }
                })

                console.log("signup response", response);

                // Navigate to signin in case the registration successfuly
                navigate('/signin');

            }
            catch(e) {

                console.log(e);
                setMessage(e.response.data.msg);
                toast.error(e.response.data.msg);
            }

        }else{ // signin!!!

            try{

                let response = await axios.post(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_SIGN_IN_URL,{
                    email: email, 
                    password: password
                },{

                    withCredentials: true,
                    headers: {

                        'Access-Control-Allow-Origin' : '*',
                        'Content-Type' : 'application/json'
                    }
                })

                console.log("signin response", response);

                // Navigate to home in case login successfuly
                navigate('/content');

            }
            catch(e){

                console.log(e);
                setMessage(e.response.data.msg);
                toast.error(e.response.data.msg);
            }
        }
    }

    return(

        <div>

            <Video poster={process.env.REACT_APP_BASE_POSTER_SIGNIN_URL} src={process.env.REACT_APP_BASE_VIDEO_SIGN_INTRO_URL} id={"signin-back-video"} autoPlay muted loop />

            <div id={"signinSignUpIntro-left-side-div"}>

                <div id={"signinSignUpIntro-logo-div"}>
                    <AppLogo id={"signinSignUpIntro-logo"} />
                </div>

                <Link to={pageToDisplay === process.env.REACT_APP_SIGN_UP_NAME ? process.env.REACT_APP_BASE_SIGN_UP_FORM_PATH : process.env.REACT_APP_BASE_SIGN_IN_FORM_PATH}>
                    <div id={"signinSignUpIntro-title-div"}>
                        <Title id={"signinSignUpIntro-title"} 
                                titleName={ pageToDisplay === process.env.REACT_APP_SIGN_UP_NAME ? process.env.REACT_APP_SIGNUP_TITLE : process.env.REACT_APP_SIGNIN_TITLE} />
                    </div>
                </Link>

                <div id={"signinSignUpIntro-snd-title-div"}>
                    <Title id={"signinSignUpIntro-snd-title"} typing={"typewriter"} 
                            titleName={pageToDisplay === process.env.REACT_APP_SIGN_UP_NAME ? process.env.REACT_APP_SIGNUP_SND_TITLE : process.env.REACT_APP_SIGNIN_SND_TITLE} />
                </div>

                <Link to={process.env.REACT_APP_BASE_HOME_PATH}>
                    <Image id={"back-icon"} src={process.env.REACT_APP_BASE_BACK_ICON_URL}/>
                </Link>

            </div>

        </div>

        // <div>
        //     <Title titleName={pageToDisplay}/>
        //     <Box component='form' sx={{m:1}} noValidate autoComplete="off">
        //         <TextField onChange={(e)=>setEmail(e.target.value)} sx={{m:1}} id='email' label='Enter the email' />
        //         <TextField onChange={(e)=>setPassword(e.target.value)} sx={{m:1}} id='password' label='Enter the password' />
        //     </Box>
        //     <Button onClick={()=>handleAction(pageToDisplay)} variant="contained">{pageToDisplay}</Button>
        //     {
                
        //         pageToDisplay === process.env.REACT_APP_SIGN_IN_NAME ? 

        //         <Box component='form' sx={{m:1}} noValidate autoComplete="off">
        //             <TextField onChange={(e)=>setFirstName(e.target.value)} sx={{m:1}} id='firstName' label='Enter your first name' />
        //             <TextField onChange={(e)=>setLastName(e.target.value)} sx={{m:1}} id='lastName' label='Enter your last name' /> 
        //             <TextField onChange={(e)=>setAge(e.target.value)} sx={{m:1}} id='age' label='Enter your age' /> 
        //             <TextField onChange={(e)=>setHeight(e.target.value)} sx={{m:1}} id='height' label='Enter your height' /> 
        //             <TextField onChange={(e)=>setWeight(e.target.value)} sx={{m:1}} id='weight' label='Enter your weight' /> 

        //             <Button onClick={()=>setGender("male")} variant="contained">Male</Button>       
        //             <Button onClick={()=>setGender("female")} variant="contained">Female</Button>     

        //             <Button onClick={()=>setActivityLevel(process.env.REACT_APP_BASE_ACTIVITY_LEVEL_LOW)} variant="contained">Low</Button>       
        //             <Button onClick={()=>setActivityLevel(process.env.REACT_APP_BASE_ACTIVITY_LEVEL_LIGHT)} variant="contained">Light</Button>  
        //             <Button onClick={()=>setActivityLevel(process.env.REACT_APP_BASE_ACTIVITY_LEVEL_MODERATE)} variant="contained">Moderate</Button>       
        //             <Button onClick={()=>setActivityLevel(process.env.REACT_APP_BASE_ACTIVITY_LEVEL_HIGH)} variant="contained">High</Button>           
        //             <Button onClick={()=>setActivityLevel(process.env.REACT_APP_BASE_ACTIVITY_LEVEL_VERY_HIGH)} variant="contained">Very High</Button>           
        //         </Box>
                
        //         :

        //         null
        //     }
        // </div>
    )
}     


export default SigninSignupIntro;