import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import {toast} from "react-toastify";

import Title from "../basicElements/Title";



const LoginSigninForm = ({pageToDisplay}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{

        setMessage(''); // Delete the message when mounting

    }, [])


    const handleAction = async (pageToDisplay) => {

        if(pageToDisplay === process.env.REACT_APP_SIGN_IN_NAME){

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
            <Title titleName={pageToDisplay}/>
            <Box component='form' sx={{m:1}} noValidate autoComplete="off">
                <TextField onChange={(e)=>setEmail(e.target.value)} sx={{m:1}} id='email' label='Enter the email' />
                <TextField onChange={(e)=>setPassword(e.target.value)} sx={{m:1}} id='password' label='Enter the password' />
            </Box>
            <Button onClick={()=>handleAction(pageToDisplay)} variant="contained">{pageToDisplay}</Button>
        </div>
    )
}

export default LoginSigninForm;