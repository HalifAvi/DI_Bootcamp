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

        // Get the data from favoriteRecipe table
        const favRecpiesArr = UsersFavRecipe.findAll({
            where:{

                userid: userId
            }

        })

        const userFavRecipes = favRecpiesArr.map(item => item.dataValues)

        console.log("FAV REC SERVER LOG IN", userFavRecipes)


        // First find the max updateserialnumber in table and then enter with this value
        const updateserialnumber = UsersCalories.findAll({

            attributes: [[db.fn('max', db.col('updateserialnumber')), 'max']],
            where: [{userid: userId}]

        })

        console.log("LAST UPDATED CALORIES:", updateserialnumber[0].dataValues.max);
            

        // Get the data from calories table
        const usersCalories = UsersCalories.findAll({
    
            where:{
    
                userid: userId,
                updateserialnumber: updateserialnumber[0].dataValues.max
            }
        })

        // Retrive the data from db response
        const currentCaloriesAmount = usersCalories[0].currentcaloriesamount;
        const dailyCaloriesAmount = usersCalories[0].dailycaloriesamount;
        const updateserialnumber = usersCalories[0].updateserialnumber;
        
        
        const todayDate = getCurrentDate()+'T'+"21:00:00.000Z";

        console.log(todayDate)
                
        // Get the data from recipes table
        const usersRecipes = UsersRecipe.findAll({

        where:{

            userid: userId,
            createdat: todayDate
        }
        })

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
                                    age, height, weight, activityLevel, fileName, userFavRecipes,
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
        
    }

    catch(error){

        console.log(error);
        res.status(404).json({msg:'Sorry, Email Address Could Not Be Found!'})
    }
}