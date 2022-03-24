
const express = require('express');
const DB = require('./modules/db.js');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());
// app.use('/', express.static(__dirname + '/public'));

app.listen(process.env.PORT||8080, ()=> {

    console.log(`listen to port ${process.env.PORT}`);
})

app.set('view engine', 'ejs');








let countries;
let cities;

// RESPONSES TO DYNAMIC PAGES : 
// The server returns the dynamic page with all the ordered data already in the page
app.get('/show', (req, res) => {

    DB.getCountries() 
    .then(data => {

        countries = data;
    })
    .catch(e=> res.json({message: e.message}));

    DB.getAllCities() 
    .then(data => {

        cities = data;
    })
    .catch(e=> res.json({message: e.message}));

    res.render('pages/countries',
    
    // An Obj to send in the response to client ( PAGE + DATA) :
        {
            countries : countries,
            cities : cities
        }
    )
})


app.get('/show/cities', (req, res) => {

    DB.getCities() 
    .then(data => {

        res.render('pages/countries',
    
        // An Obj to send in the response to client ( PAGE + DATA) :
            {
                countries : data
            }
        )
    })
    .catch(e=> res.json({message: e.message}));
})











// RESPONSES TO STATIC PAGES : 
// The sever returns the page or the data and the manipulations will be made in the Client Side

// app.get('/countries',(req, res)=>{

//     DB.getCountries() // Use a function from db Module - All the sql we do there
//     .then(data => {
//         res.json(data)
//     })
//     .catch(e=> res.json({message: e.message}));
// })


// // :RESTFUL API
// app.get('/cities/:countryId',(req, res)=>{

//     DB.getCities(req.params.countryId) // Use a function from db Module - All the sql we do there
//     .then(data => {
//         res.json(data)
//     })
//     .catch(e=> res.json({message: e.message}));
// })

















