import { Sequelize } from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const Users = db.define('users',{
    firstName: {
        field: 'firstname', 
        type: DataTypes.STRING
    },
    lastName: {
        field: 'lastname', 
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
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

export default Users;




    

