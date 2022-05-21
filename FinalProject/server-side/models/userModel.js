import { Sequelize } from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const Users = db.define('users',{
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    createdAt: {
        field: 'createdat',
        type: DataTypes.DATE
    },
    updatedAt: {
        field: 'updatedat',
        type: DataTypes.DATE
    }
}, {freezeTableName: true})




export const signIn = (email, hashPassword) => {

    return Users.create({

        email: email,
        password: hashPassword
    })
}




export const logIn = (email, password) => {
    
    const user = Users.findAll({
        where:{

            email: email
        }
    })

    const match = bcrypt.compare(password, user[0].password);

    if(!match) return res.status(404).json({msg: "Wrong Password"});

    const userId = user[0].id;
    const e_mail = user[0].email;

    // Each time we'll get a different access token cause we'll have different userId and email with our ACCESS_TOKEN_SECRET
    // that we only know so we can verify according to it
    // We will send this token in the cookie to the front end
    // And we can wrap 'Home' component with that token - and the user'll have access to this page according 
    // to expiry time we defined in this token
    const accessToken = jwt.sign({userId, e_mail}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '60s'
    })

    // Set the cookie in the http response ((we imported it in 'server.js'))
    // we get here the all encrypted data
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        maxAge: 60 * 1000 // 60 seconds
    }); 

    // We send back the access token
    return accessToken;
}


    

