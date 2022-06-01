import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import axios from 'axios';
import {toast} from "react-toastify";

import Title from "../BasicElements/Title";
import '../PagesStyle/LoginSigninForm.css';
import Video from "../BasicElements/Video";
import AppLogo from "../BasicElements/AppLogo";
import Image from "../BasicElements/Image";




const LoginSigninForm = ({pageToDisplay}) => {

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

        if(pageToDisplay === process.env.REACT_APP_SIGN_IN_NAME){

            try{ 

                let response = await axios.post(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_SIGN_IN_URL,{
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

                console.log("register response", response);

                // Navigate to login in case the registration successfuly
                navigate('/login');

            }
            catch(e) {

                console.log(e);
                setMessage(e.response.data.msg);
                toast.error(e.response.data.msg);
            }

        }else{ // Login!!!

            try{

                let response = await axios.post(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_LOG_IN_URL,{
                    email: email, 
                    password: password
                },{

                    withCredentials: true,
                    headers: {

                        'Access-Control-Allow-Origin' : '*',
                        'Content-Type' : 'application/json'
                    }
                })

                console.log("login response", response);

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

            <Video poster={process.env.REACT_APP_BASE_POSTER_LOGIN_URL} src={process.env.REACT_APP_BASE_VIDEO_LOGIN_URL} id={"login-back-video"} autoPlay muted loop />

            <div id={"login-left-side-div"}>

                <div id={"login-logo-div"}>
                    <AppLogo id={"login-logo"} />
                </div>

                <div id={"login-title-div"}>
                    <Title id={"login-title"} titleName={process.env.REACT_APP_LOGIN_TITLE} />
                </div>

                <div id={"login-snd-title-div"}>
                    <Title id={"login-snd-title"} typing={"typewriter"} titleName={process.env.REACT_APP_LOGIN_SND_TITLE} />
                </div>

                <Link to={'/'}>
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


export default LoginSigninForm;