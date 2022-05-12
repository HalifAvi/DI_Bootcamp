
const express = require('express');
const cors = require('cors');
const product_routes = require("./routes/products.js")


const app = express();
app.use(cors());


//Sometimes we need it too
app.use(express.urlencoded({extended: true}));
// Because we using POST methods here
app.use(express.json());




app.listen(process.env.PORT||8080, ()=> {

    console.log(`listen to port ${process.env.PORT}`);
})


app.use('/api/products', product_routes)

























// app.get('/countries', (req, res) => {

//     DB.getCountries() 
//     .then(countries => {

//         res.send(countries);
//     })
//     .catch(e=> res.json({message: e.message}));
// })


// app.get('/cities/:id', (req, res) => {

//     DB.getCities(req.params.id) 
//     .then(cities => {

//         res.send(cities);
//     })
//     .catch(e=> res.json({message: e.message}));
// })



// app.post('/addCountry', (req, res) => {

//     DB.addCountry(req.body.countryToAdd) 
//     .then(newCountryId => {

//         res.json(newCountryId);
//     })
//     .catch(e=> res.json({message: e.message}));
// })












