import { Sequelize } from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const UsersBody = db.define('usersbody',{
    userid: {
        type: DataTypes.INTEGER
    },
    age: {
        type: DataTypes.STRING
    },
    height: {
        type: DataTypes.STRING
    },
    weight: {
        type: DataTypes.STRING
    },
    activityLevel: {
        field: 'activitylevel', 
        type: DataTypes.STRING
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

export default UsersBody;




    

