import { Sequelize } from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const UsersFavRecipe = db.define('favoriterecpies',{

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
    recipeunitprotein: {
        type: DataTypes.STRING
    },
    recipeunitiron: {
        type: DataTypes.STRING
    },
    recipeunitvitaminc: {
        type: DataTypes.STRING
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

export default UsersFavRecipe;




    

