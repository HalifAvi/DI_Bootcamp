
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import cookieParser from 'cookie-parser';
import users_routes from "./routes/users.js";
import db from './config/db.js';

dotenv.config();
const app = express();


try{

    await db.authenticate();
    console.log("Database Connected...")
}
catch (e) {

    console.log(e);
}


 // Because we want to use http cookie in front and back end
app.use(cors({credentials : true, origin: process.env.FRONT_END_URL_SERVER}));
app.use(cookieParser());

//Sometimes we need it too
app.use(express.urlencoded({extended: true}));
// Because we using POST methods here
app.use(express.json());

app.use('/users', users_routes)

app.listen(process.env.PORT||8080, ()=> {

    console.log(`listen to port ${process.env.PORT}`);
})