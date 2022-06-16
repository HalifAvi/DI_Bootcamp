import Users from "../models/userModel.js"; // the 'users' table
import UsersBody from "../models/bodyModel.js";
import UsersCalories from  "../models/calorieModel.js";
import Upload from '../models/imageModel.js';
import UsersRecipe from '../models/recipeModel.js';
import db from '../config/db.js';




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

        // 1. Create new row in 'usersbody' table   
        await UsersBody.create({

            // Here we are using the 'id'
            userid: answer.dataValues.id,
            age: age,
            height: height, 
            weight: weight,
            activityLevel: activityLevel
        })

        // 2. Create new row in 'usersImage' table
        // The file was uploaded before we came here (made in the middleware by multer)
        const fileName = req.file ? req.file.filename : process.env.DEFAULT_IMAGE_URL;
        const fileType = req.file ? req.file.mimetype : process.env.DEFAULT_IMAGE_TYPE;

        console.log("fileName",fileName)
        console.log("fileType",fileType)

        await Upload.create({

            userid: answer.dataValues.id,
            filename: fileName,
            filetype: fileType
        })

        let calories = (getDailyCaloriesAmount(gender, age, height, weight, activityLevel)).toFixed(0);

        let caloriesNum =  Number(calories);

        // 3. Create new row in 'usersCalories' table
        await UsersCalories.create({

            // Here we are using the 'id'
            userid: answer.dataValues.id,
            currentcaloriesamount: caloriesNum,
            dailycaloriesamount: caloriesNum,
            updateserialnumber : 1
        })

        res.json({msg: 'Registered Successfully!'})

    }
    catch(error){

        console.log(error)

        // We defined our 'email' as unique in db
        res.status(404).json({msg: 'Email Already Exists'})
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

        if(!match) return res.status(400).json({msg: "Sorry, Email Or Password Is Incorrect!"});
        
        // Retrive the data from db response
        const userId = user[0].id;
        const email = user[0].email;
        const gender = user[0].gender;
        const firstName = user[0].firstName;
        const lastName = user[0].lastName;


        // Get the data from body table
        const userBody = await UsersBody.findAll({
            where:{
                userid: userId
            }
        })

        // Retrive the data from db response
        const age = userBody[0].age;
        const height = userBody[0].height;
        const weight = userBody[0].weight;
        const activityLevel = userBody[0].activityLevel;


        // Get the data from files
        const userImage = await Upload.findAll({
            where:{
                userid: userId
            }
        })

        // Retrive the data from db response
        const fileName = userImage[0].filename;


        // First find the max updateserialnumber in table and then enter with this value
        UsersCalories.findAll({

            attributes: [[db.fn('max', db.col('updateserialnumber')), 'max']],
            where: [{userid: userId}]

        }).then(updateserialnumber => {

            console.log("LAST UPDATED CALORIES:", updateserialnumber[0].dataValues.max);
            
            // Get the data from calories table
            UsersCalories.findAll({
    
                where:{
    
                    userid: userId,
                    updateserialnumber: updateserialnumber[0].dataValues.max
                }
            }).then(usersCalories=>{

                // Retrive the data from db response
                const currentCaloriesAmount = usersCalories[0].currentcaloriesamount;
                const dailyCaloriesAmount = usersCalories[0].dailycaloriesamount;
                const updateserialnumber = usersCalories[0].updateserialnumber;
        
        
                const todayDate = getCurrentDate()+'T'+"21:00:00.000Z";
                
                // Get the data from recipes table
                UsersRecipe.findAll({
                    where:{
                        userid: userId,
                        createdat: todayDate
                    }
                }).then(usersRecipes=>{

                    // Retrive the data from db         
                    const userTodayRecipes = usersRecipes.map(item => item.dataValues)
                
                    // 3: Create an accessToken 
            
                    // 4: Add this accessToken to the http cookies
            
                    // 5: Send back this accessToken
            
                    // Each time we'll get a different access token cause we'll have different userId and email with our ACCESS_TOKEN_SECRET
                    // that we only know so we can verify according to it
                    // We will send this token in the cookie to the front end
                    // And we can wrap 'Home' component with that token - and the user'll have access to this page according 
                    // to expiry time we defined in this token
                    const accessToken = jwt.sign({userId, email, gender, firstName, lastName,
                                                    age, height, weight, activityLevel, fileName,
                                                    currentCaloriesAmount, dailyCaloriesAmount, userTodayRecipes, updateserialnumber},
                    process.env.ACCESS_TOKEN_SECRET, {
            
                        expiresIn: '60s'
            
                    })
            
                    // Set the cookie in the http response ((we imported it in 'server.js'))
                    // we get here the all encrypted data
                    res.cookie('accessToken', accessToken, {
                        httpOnly: true,
                        maxAge: 60 * 1000 // 60 seconds
                    }); 
            
                    console.log('accessToken', accessToken)
                    // We send back the access token 
                    res.json({accessToken});

                }).catch(e=>console.log(e))
    
            }).catch(e=>console.log(e))
    
        }).catch(e=> console.log(e))
    }

    catch(error){

        console.log(error);
        res.status(404).json({msg:'Sorry, Email Address Could Not Be Found!'})
    }
}




export const signOut = async (req, res) => {

    res.json({msg:'logout'})

}


const getDailyCaloriesAmount = (gender, age, height, weight, activityLevel) => {

    // console.log(gender)
    // console.log(age)
    // console.log(height)
    // console.log(weight)
    // console.log(activityLevel)
    
    let BMR = gender===process.env.GENDER_FST_OPTION ? 

                Number(height)*(Number(process.env.FOR_HEIGHT_MEN_BMR))+
                Number(weight)*(Number(process.env.FOR_WEIGHT_MEN_BMR))+
                Number(process.env.ADDITIONAL_PARAM_MEN_BMR)-
                Number(age)*(Number(process.env.FOR_AGE_MEN_BMR))

                :

                Number(height)*(Number(process.env.FOR_HEIGHT_WOMEN_BMR))+
                Number(weight)*(Number(process.env.FOR_WEIGHT_WOMEN_BMR))+
                Number(process.env.ADDITIONAL_PARAM_WOMEN_BMR)-
                Number(age)*(Number(process.env.FOR_AGE_WOMEN_BMR))

                console.log("BMR", BMR)
                
    return  Number(activityLevel)*BMR*(Number(process.env.TERMI_EFFECT_FACTOR));
}


const getCurrentDate = () => {

    let date = new Date();
    let dayDate = date.getDate();

    let month = date.getMonth();
    let year = date.getYear();

    dayDate--;
    month++;

    if(year<1000)
        year+=1900;

    if(month<10)
    month = "0" + month;
    
    if(dayDate<10)
    dayDate = "0" + dayDate;

    return `${year}-${month}-${dayDate}`;
}


























           
