const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const DB = require('./modules/db.js');

app.listen(process.env.PORT || 8080, ()=> {

    console.log(`listen to port ${process.env.PORT}`)
})

/***********************************************************8*/

app.get('/countries', (req, res)=> {

    DB.getCountries()
    .then(countries => {

        res.send(countries);
    })
    .catch(e => res.json({message : e.message}))
})


app.get('/cities/:id', (req, res)=> {

    DB.getCities(req.params.id)
    .then(cities => {

        res.send(cities);
    })
    .catch(e => res.json({message : e.message}))
})


