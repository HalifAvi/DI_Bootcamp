import { Sequelize } from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const Upload = db.define('files',{

    filename: {
        type: DataTypes.STRING
    },
    filetype: {
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

export default Upload;