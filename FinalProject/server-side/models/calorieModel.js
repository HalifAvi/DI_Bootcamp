import { Sequelize } from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const UsersCalories = db.define('userscalories',{
    userid: {
        type: DataTypes.INTEGER
    },
    currentcaloriesamount: {
        type: DataTypes.INTEGER
    },
    dailycaloriesamount: {
        type: DataTypes.INTEGER
    },
    createdAt: {    // createdAt: false
        field: 'createdat', 
        type: DataTypes.DATE
    },
    updatedAt: {    // updatedAt: false
        field: 'updatedat',
        type: DataTypes.DATE
    }
}, {freezeTableName: true})

export default UsersCalories;

