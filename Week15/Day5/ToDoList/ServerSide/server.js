
const express = require('express');
const DB = require('./modules/db.js');
const cors = require('cors');

const app = express();
app.use(cors());


//Sometimes we need it too
app.use(express.urlencoded());
// Because we using POST methods here
app.use(express.json());




app.listen(process.env.PORT||8080, ()=> {

    console.log(`listen to port ${process.env.PORT}`);
})


app.get('/allTasks', (req, res) => {

    DB.getAllTasks() 
    .then(tasks => {

        res.send(tasks);
    })
    .catch(e=> res.json({message: e.message}));
})


app.get('/addTask', (req, res) => {

    DB.addTask(req.query.newTask) 
    .then(task => {

        res.send(task);
    })
    .catch(e=> res.json({message: e.message}));
})


app.get('/deleteTask', (req, res) => {

    DB.deleteTask(req.query.taksToDel) 
    .then(task => {

        res.send(task);
    })
    .catch(e=> res.json({message: e.message}));
})














