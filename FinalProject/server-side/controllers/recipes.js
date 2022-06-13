import UsersRecipe from "../models/recipeModel.js";



export const insertRecipe = async (req, res) => {

    console.log("###############")
    // console.log(req.body.recipeObj, req.body);
    console.log("###############")

    const {
            id,
            title,
            image,
            calories,
            protein,
            fat,
            carbs
        } = req.body.recipeObj;


    try{

        // Create new row in 'usersRecipe' table
        const answer = await UsersRecipe.create({

            userid: req.body.id,
            recipesn: id,
            recipetitle: title,
            recipeimage: image,
            recipecalories: calories,
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



