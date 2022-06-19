import UsersCalories from "../models/calorieModel.js";



export const updateCurrentCaloriesAmount = async (req, res) => {

    console.log("###############")
    // console.log("PARAMS-UPDATE-CALORIES:", req.body);
    console.log("###############")

    const {
            userid,
            updatedCalories,
            updateserialnumber
      
        } = req.body;

    try{

        // Update row in 'userscalories' table
        let updatedRow = await UsersCalories.update(
            {

                currentcaloriesamount : updatedCalories
            },
            {
                where: { 
                            userid: userid,
                            updateserialnumber: updateserialnumber
                        }
            });


        // Return the whole new recipe object
        res.json(updatedRow.dataValues)
    }
    catch(error){

        console.log(error)

        res.status(404).json({msg: 'Fault adding new recipe!!!'})
    }
}



