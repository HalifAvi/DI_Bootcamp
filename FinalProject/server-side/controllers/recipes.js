import UsersRecipe from "../models/recipeModel.js";



export const insertRecipe = async (req, res) => {

    console.log("###############")
    console.log(req.body)
    console.log("###############")

    const {

        userid,
        calories,
        title,
        image,
        recipesn,
        protein,
        fat,
        carbs

    } = req.body

    try{

        // Create new row in 'usersRecipe' table
        const answer = await UsersRecipe.create({

            userid: userid,
            recipecalories: calories,
            recipetitle: title,
            recipeimage: image,
            recipesn: recipesn,
            recipeprotein: protein,
            recipefat: fat,
            recipecarbs: carbs
        })

        // Return the whole new recipe object
        res.json(answer.dataValues)
    }
    catch(error){

        console.log(error)

        res.status(404).json({msg: 'Fault adding new recipe!!!'})
    }
}



