import { Sequelize } from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const UsersRecipe = db.define('usersrecipe',{

    userid: {
        type: DataTypes.INTEGER
    },
    recipesn: {
        type: DataTypes.INTEGER
    },
    recipetitle: {
        type: DataTypes.STRING
    },
    recipeimage: {
        type: DataTypes.STRING
    },
    recipecalories: {
        type: DataTypes.INTEGER
    },
    recipeprotein: {
        type: DataTypes.INTEGER
    },
    recipeiron: {
        type: DataTypes.INTEGER
    },
    recipevitaminc: {
        type: DataTypes.INTEGER
    },
    recipeinstructions: {
        type: DataTypes.STRING
    },
    recipeingredients: {
        type: DataTypes.JSON
    },
    createdAt: {    // createdAt: false
        field: 'createdat', 
        type: DataTypes.DATEONLY
    },
    updatedAt: {    // updatedAt: false
        field: 'updatedat',
        type: DataTypes.DATE
    }
}, {freezeTableName: true})

export default UsersRecipe;




    

