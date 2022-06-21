import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize( process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,   

    {
        host: process.env.DB_HOST, //  'localhost'               
        dialect: 'postgres',
        // dialectOptions: {
        //     ssl: {
        //       require: true, // This will help you. But you will see new error
        //       rejectUnauthorized: false // This line will fix new error
        //     }
        //   },
        // logging: true
    }
);

export default db;
