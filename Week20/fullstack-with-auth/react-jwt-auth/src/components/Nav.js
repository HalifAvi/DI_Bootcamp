import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";

const Nav = () => {

    return(
        <>
            <Stack direction="row" spacing={2}>
                <Button component={Link} to={'/'}>Home</Button>
                <Button component={Link} to={'/about'}>About</Button>
                <Button component={Link} to={'/register'}>Register</Button>
                <Button component={Link} to={'/login'}>Login</Button>
                <Button>Log out</Button>
            </Stack>
        </>
    )
}

export default Nav;