
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import users_routes from "./routes/users.js";
import recipes_routes from "./routes/recipes.js";
import calories_routes from "./routes/calories.js";
import db from './config/db.js';
import path from 'path';
import cron from 'node-cron';
import UsersCalories from "./models/calorieModel.js";



dotenv.config();
const app = express();


try{

    await db.authenticate();
    console.log("Database Connected...")
}
catch (e) {

    console.log(e);
}


cron.schedule('0 30 * * * *', async () => {

    // First: Get the all unique usersid
    UsersCalories.aggregate('userid', 'DISTINCT', { plain: false })
    .then(data=> {
            
        // console.log(data[0].DISTINCT)
        // console.log(data[1].DISTINCT)
        data.forEach((usersid, idx) => {
                
            // Second: Get the max updatedat for each unique userid
            UsersCalories.findAll({

                attributes: [[db.fn('max', db.col('updateserialnumber')), 'max']],
                where: [{userid: usersid.DISTINCT}]

            }).then(answer=> {   

                // console.log("ANSWER:", answer[0].dataValues.max);
                
                // Third: Get the whole calories object
                UsersCalories.findAll({

                    where: [{

                        userid: data[idx].DISTINCT,
                        updateserialnumber: answer[0].dataValues.max

                    }]

                }).then(data=>{

                    // console.log(data[0].dataValues)

                    try{
                        // Last step: Open new calories row for this user
                            UsersCalories.create({
                            
                                userid: data[0].dataValues.userid,
                                currentcaloriesamount: data[0].dataValues.dailycaloriesamount,
                                dailycaloriesamount: data[0].dataValues.dailycaloriesamount,
                                updateserialnumber: data[0].dataValues.updateserialnumber + 1
                            })
                        }

                    catch(e){
                
                            console.log(e);
                    }

                }).catch(e=> console.log(e))

            }).catch(e=> console.log(e))

        })// For closing

    }).catch(e=>console.log(e))

});
        

// Give us into 'dirname' the exact location in our file system
const __dirname = path.resolve();
// Instead of writing __dirname + '/public' we can use path.join (we imported it before)
// The name of the folder
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

 // Because we want to use http cookie in front and back end
app.use(cors({credentials : true, origin: process.env.FRONT_END_URL_SERVER}));
app.use(cookieParser());

//Sometimes we need it too
app.use(express.urlencoded({extended: true}));
// Because we using POST methods here
app.use(express.json());


app.use('/users', users_routes);
app.use('/recipes', recipes_routes);
app.use('/calories', calories_routes); 



app.listen(process.env.PORT||8080, ()=> {

    console.log(`listen to port ${process.env.PORT}`);
})


