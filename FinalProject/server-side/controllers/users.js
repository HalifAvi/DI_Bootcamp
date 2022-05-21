import {logIn, signIn} from "../models/UserModel.js"; // the 'users' table

// Hasing the password - before sending to db
import bcrypt from 'bcrypt';

// To create an access token - to define the expiration time
// We will send this token in the cookie to the front end
// And we can wrap 'Home' component with that token - and the user'll have access to this page according 
// to expiry time we defined in this token
import jwt from 'jsonwebtoken';



// The fun has here the req & res
// cause everthing we send from the router
// has these 
export const _signIn = (req, res) => {

    const {email, password} = req.body;
    const salt = bcrypt.genSalt();
    const hashPassword = bcrypt.hash(password, salt);

    signIn(email, hashPassword)
    .then(data => {

        res.json({message: 'Register successfuly!'})
    })
    .catch(e=> 

        // We defined our 'email' as unique in db
        res.status(404).json({msg:'Email already exist'})
    )
}



export const _logIn = (req, res) => {

    const {email, password} = req.body;
    
    logIn(email, password)
    .then(data=> {

        res.json({accessToken});
    })
    .catch(e=> 

        res.status(404).json({msg:'Email not found'})
    );
}
