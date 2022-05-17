import { Sequelize } from "sequelize";
import db from "../config/Db.js";

const {DataTypes} = Sequelize;

const Users = db.define('users',{
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.STRING
    },
    createdAt: {
        field: 'createdat',
        type: DataTypes.DATE
    },
    updatedAt: {
        field: 'updatedat',
        type: DataTypes.DATE
    }
}, {freezeTableName: true})

export default Users;
