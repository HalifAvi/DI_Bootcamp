import Users from "../models/userModel.js"; // the 'users' table
import UsersBody from "../models/bodyModel.js";
import Upload from '../models/uploadModel.js';


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
export const signUp = async (req, res) => {

    // Here we have all info about the uploaded file
    // console.log('upload file', req.body.formData);

    console.log("###############")
    console.log(req.body);
    console.log(req.file);
    console.log("###############")

    const {
            email, 
            password,
            firstName,
            lastName, 
            gender, 
            age,
            height, 
            weight,
            activityLevel
        } = req.body;

    // Hasing the password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try{

        // Create new row in 'users' table
        // Use the 'id' from the answer to the next db request
        const answer = await Users.create({

            email: email,
            password: hashPassword,
            firstName: firstName,
            lastName: lastName, 
            gender: gender
        })

        // Create new row in 'usersbody' table
        await UsersBody.create({

            // Here we are using the 'id'
            userid: answer.dataValues.id,
            age: age,
            height: height, 
            weight: weight,
            activityLevel: activityLevel
        })

        // Create new row in 'usersImage' table
        // The file was uploaded before we came here (made in the middleware by multer)
        const fileName = req.file ? req.file.filename : res.json({msg: 'NO file to upload'});
        const fileType = req.file ? req.file.mimetype : null;

        await Upload.create({

            filename: fileName,
            filetype: fileType
        })

        console.log('Register successfuly!')
    }
    catch(error){

        console.log(error)

        // We defined our 'email' as unique in db
        res.status(404).json({msg:'Email already exist'})
    }
}



export const signIn = async (req, res) => {

    try{

        // 1: Find if there is same email in db
        const user = await Users.findAll({
            where:{
                email: req.body.email
            }
        })

        // 2: Check the password is equal to the db's password
        const match = await bcrypt.compare(req.body.password, user[0].password)

        if(!match) return res.status(404).json({msg: "Wrong Password"});
        
        const userId = user[0].id;
        const email = user[0].email;

        // 3: Create an accessToken 

        // 4: Add this accessToken to the http cookies

        // 5: Send back this accessToken

        // Each time we'll get a different access token cause we'll have different userId and email with our ACCESS_TOKEN_SECRET
        // that we only know so we can verify according to it
        // We will send this token in the cookie to the front end
        // And we can wrap 'Home' component with that token - and the user'll have access to this page according 
        // to expiry time we defined in this token
        const accessToken = jwt.sign({userId, email}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '60s'
        })

        // Set the cookie in the http response ((we imported it in 'server.js'))
        // we get here the all encrypted data
        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            maxAge: 60 * 1000 // 60 seconds
        }); 

        // We send back the access token
        res.json({accessToken});
    }

    catch(error){

        console.log(error);
        res.status(404).json({msg:'Email not found'})
    }
}