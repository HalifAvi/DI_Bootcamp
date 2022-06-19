import UsersRecipe from "../models/recipeModel.js"; 
import UsersFavRecipe from "../models/favRecipeModel.js";

export const insertRecipe = async (req, res) => {

    console.log("###############")
    console.log(req.body)
    console.log("###############")

    const {

        userid,
        recipesn,
        title,
        image,
        instructions,
        calories,
        protein,
        iron,
        vitaminC,
        ingredients

    } = req.body

    console.log(ingredients)


    try{

        // Create new row in 'usersRecipe' table
        const answer = await UsersRecipe.create({

            userid: userid,
            recipecalories: calories,
            recipetitle: title,
            recipeimage: image,
            recipesn: recipesn,
            recipeprotein: protein,
            recipeiron: iron,
            recipevitaminc: vitaminC,
            recipeinstructions: instructions,
            recipeingredients: ingredients

        })

        // Return the whole new recipe object
        res.json(answer.dataValues)
    }
    catch(error){

        console.log(error)

        res.status(404).json({msg: 'Fault adding new recipe!!!'})
    }
}



export const insertFavRecpie = async (req, res) => {

    console.log("###############")
    console.log(req.body)
    console.log("###############")

    const {

        userid,
        recipesn,
        title,
        image,
        instructions,
        calories,
        protein,
        iron,
        vitaminC,
        ingredients

    } = req.body

    console.log(ingredients)


    try{

        // Create new row in 'favoritesrecipe' table
        const answer = await UsersFavRecipe.create({

            userid: userid,
            recipecalories: calories,
            recipetitle: title,
            recipeimage: image,
            recipesn: recipesn,
            recipeprotein: protein,
            recipeiron: iron,
            recipevitaminc: vitaminC,
            recipeinstructions: instructions,
            recipeingredients: ingredients

        })

        // Return the whole new recipe object
        res.json(answer.dataValues)
    }
    catch(error){

        console.log(error)

        res.status(404).json({msg: 'Fault adding new recipe!!!'})
    }
}


export const removeFavRecpie = async (req, res) => {

    console.log("###############")
    console.log(req.body.userId)
    console.log("###############")

    try{

        const answer = await UsersFavRecipe.destroy({

            where: { 
                
                recipesn: req.body.recipeSnToRemove,
                userid: req.body.userId
            
            }

          });
      
        res.json(answer)
    }
    catch(error){

        console.log(error)

        res.status(404).json({msg: 'Fault delete recipe from favorites!!!'})
    }
}


export const removeDailyRecipe = async (req, res) => {

    console.log("###############")
    console.log(req.body.recipeSnToRemove)
    console.log("###############")

    const todayDate = getCurrentDate()+'T'+"21:00:00.000Z"

    try{

        const answer = await UsersRecipe.destroy({

            where: { 
                
                recipesn: req.body.recipeSnToRemove,
                createdat: todayDate,
                userid: req.body.userId

            }

          });
      
        res.json(answer)
    }
    catch(error){

        console.log(error)

        res.status(404).json({msg: 'Fault delete recipe from favorites!!!'})
    }
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



