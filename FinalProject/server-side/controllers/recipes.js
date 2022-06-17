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
