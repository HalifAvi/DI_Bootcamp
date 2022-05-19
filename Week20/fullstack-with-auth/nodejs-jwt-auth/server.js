
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import cookieParser from 'cookie-parser';
import router from "./routes/index.js";
import db from './config/Db.js';

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
app.use(cors({credentials : true, origin: `http://localhost:3000`}));
app.use(cookieParser());

//Sometimes we need it too
app.use(express.urlencoded({extended: true}));
// Because we using POST methods here
app.use(express.json());

app.use(router);



app.listen(process.env.PORT||8080, ()=> {

    console.log(`listen to port ${process.env.PORT}`);
})


























// app.get('/countries', (req, res) => {

//     DB.getCountries() 
//     .then(countries => {

//         res.send(countries);
//     })
//     .catch(e=> res.json({message: e.message}));
// })


// app.get('/cities/:id', (req, res) => {

//     DB.getCities(req.params.id) 
//     .then(cities => {

//         res.send(cities);
//     })
//     .catch(e=> res.json({message: e.message}));
// })



// app.post('/addCountry', (req, res) => {

//     DB.addCountry(req.body.countryToAdd) 
//     .then(newCountryId => {

//         res.json(newCountryId);
//     })
//     .catch(e=> res.json({message: e.message}));
// })












