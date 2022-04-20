
const express = require('express');
const DB = require('./modules/db.js');

const app = express();

app.use(express.json());
app.use('/', express.static(__dirname + '/public'));


app.listen(process.env.PORT||8080, ()=> {

    console.log(`listen to port ${process.env.PORT}`);
})



app.get('/countries',(req, res)=>{

    DB.getCountries() // Use a function from db Module - All the sql we do there
    .then(data => {
        res.json(data)
    })
    .catch(e=> res.json({message: e.message}));
})


// :RESTFUL API
app.get('/cities/:countryId',(req, res)=>{

    DB.getCities(req.params.countryId) // Use a function from db Module - All the sql we do there
    .then(data => {
        res.json(data)
    })
    .catch(e=> res.json({message: e.message}));
})

















