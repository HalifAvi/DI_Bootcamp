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
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [sport, setSport] = useState('');
    const [message, setMessage] = useState('');


    

    const navigate = useNavigate();

    let signInDiv;

    useEffect(()=>{

        // setMessage(''); // Delete the message when mounting

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
            {
                
                pageToDisplay === process.env.REACT_APP_SIGN_IN_NAME ? 

                <Box component='form' sx={{m:1}} noValidate autoComplete="off">
                    <TextField onChange={(e)=>setFirstName(e.target.value)} sx={{m:1}} id='firstName' label='Enter your first name' />
                    <TextField onChange={(e)=>setLastName(e.target.value)} sx={{m:1}} id='lastName' label='Enter your last name' /> 
                    <TextField onChange={(e)=>setAge(e.target.value)} sx={{m:1}} id='age' label='Enter your age' /> 
                    <TextField onChange={(e)=>setHeight(e.target.value)} sx={{m:1}} id='height' label='Enter your height' /> 
                    <TextField onChange={(e)=>setWeight(e.target.value)} sx={{m:1}} id='weight' label='Enter your weight' /> 

                    <Button onClick={()=>setGender("male")} variant="contained">Male</Button>       
                    <Button onClick={()=>setGender("female")} variant="contained">Female</Button>     

                    <Button onClick={()=>setSport("")} variant="contained">Lowest</Button>       
                    <Button onClick={()=>setSport("")} variant="contained">Low</Button>  
                    <Button onClick={()=>setSport("")} variant="contained">Medium</Button>       
                    <Button onClick={()=>setSport("")} variant="contained">High</Button>           
                </Box>
                
                :

                null
            }
        </div>
    )
}     


export default LoginSigninForm;