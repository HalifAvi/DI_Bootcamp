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
    recipefat: {
        type: DataTypes.INTEGER
    },
    recipecarbs: {
        type: DataTypes.INTEGER
    },
    createdAt: {    // createdAt: false
        field: 'createdat', 
        type: DataTypes.DATE
    },
    updatedAt: {    // updatedAt: false
        field: 'updatedat',
        type: DataTypes.DATEONLY
    }
}, {freezeTableName: true})

export default UsersRecipe;




    

