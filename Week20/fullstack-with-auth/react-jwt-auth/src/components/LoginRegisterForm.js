import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const LoginRegisterForm = ({title}) => {

    return(
        <>
            <div>
                <h3>{title} Form</h3>
            </div>
            <Box component='form' sx={{m:1}} noValidate autoComplete="off">
                <TextField sx={{m:1}} id='email' label='Enter the email' />
                <TextField sx={{m:1}} id='password' label='Enter the password' />
            </Box>
            <Button variant="contained">{title}</Button>
        </>
    )
}

export default LoginRegisterForm;