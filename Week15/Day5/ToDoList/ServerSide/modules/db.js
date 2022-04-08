const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

const db = knex({

    client: 'pg',
    connection:{

        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        sslmode : false
    }
});



const getAllTasks = () => {

    return  db('tasks')
    .select('*');
} 


const addTask = taskDes => {

    return  db('tasks')
    .insert({task_description : taskDes})
    .returning('task_description')
} 

const deleteTask = taskID => {

    return  db('tasks')
    .del()
    .where({task_id : taskID})
    .returning('task_id')

} 



module.exports = {

    addTask,
    getAllTasks,
    deleteTask
}