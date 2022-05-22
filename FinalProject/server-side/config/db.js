import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize( process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,   

    {
        host: 'localhost', //  process.env.DB_HOST              
        dialect: process.env.DB_USER,
        logging: true // IN PRODUCTION MODE WE'LL CHANGE IT TO 'false'
    }
);

export default db;
