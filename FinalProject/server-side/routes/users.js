import express from 'express';
import {signUp, signIn, signOut} from '../controllers/users.js';
import { upload } from '../middlewares/uploads.js';


const router = express.Router();



// PAY ATTENTION TO THE ORDER !!!! 
// First do the middleware : save file in directory and then put the file name into db table
router.post('/signUp', upload.single('file'), signUp);
router.post('/signIn', signIn);
router.get('/signOut', signOut);


// To protect our 'Home' component with token
// You will get an error or next if everything is good
// in 'VerifyToken' so if you'll get next so continue
// with the code here :
// router.get('/token', VerifyToken, (req, res)=>{

//     // WE can do it more secure
//     // and change the token each time you verify the token and put it in the http cookies
//     // (the same rows we wrote in the login - from row 63 in Users.js into controllers folder) 
//     res.status(200).json({msg: 'accessToken'})

// });


export default router;