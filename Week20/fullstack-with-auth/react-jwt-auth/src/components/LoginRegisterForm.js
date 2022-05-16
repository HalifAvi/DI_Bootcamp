import React, {useState} from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";


const LoginRegisterForm = ({title}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleAction = (title) => {

        if(title == "Register"){


        }else{


        }
    }

    return(
        <>
            <div>
                <div>
                    <h3>{title} Form</h3>
                </div>
                <Box component='form' sx={{m:1}} noValidate autoComplete="off">
                    <TextField onChange={(e)=>setEmail(e.target.value)} sx={{m:1}} id='email' label='Enter the email' />
                    <TextField onChange={(e)=>setPassword(e.target.value)} sx={{m:1}} id='password' label='Enter the password' />
                </Box>
                <Button onClick={()=>handleAction(title)} variant="contained">{title}</Button>
            </div>
            <div>
                {message}
            </div>
            <div>
                {title == "register" ? <Link to="/login">Login</Link> : <Link to="/register">Register</Link>}
            </div>
        </>
    )
}

export default LoginRegisterForm;