
const express = require('express');
const DB = require('./modules/db.js');
const cors = require('cors');

const app = express();
app.use(cors());


//Sometimes we need it too
app.use(express.urlencoded({extended: true}));
// Because we using POST methods here
app.use(express.json());




app.listen(process.env.PORT||8080, ()=> {

    console.log(`listen to port ${process.env.PORT}`);
})


// CRUD - CREATE READ UPDATE DELETE

// READ - get method
app.get('/api/products', (req, res) => {

    DB.getAllProducts() 
    .then(data => {

        res.send(data);
    })
    .catch(e=> res.json({message: e.message}));
})


// READ - get method
app.get('/api/product/:id', (req, res) => {

    DB.getProduct(req.params.id) 
    .then(product => {

        res.send(product);
    })
    .catch(e=> res.json({message: e.message}));
})

// READ - get method : search according to name 
//  http://localhost:5000/api/product?q=ip
app.get('/api/product', (req, res) => {

    DB.searchProduct(req.query.q) 
    .then(product => {

        res.send(product);
    })
    .catch(e=> res.json({message: e.message}));
})





// CREATE - post method
// In postman choose 'POST' & 'body'->change to 'json'->and to 'raw' 
app.post('/api/product', (req, res) => {

    DB.addProduct(req.body) 
    .then(newProduct => {

        res.json(newProduct);
    })
    .catch(e=> res.json({message: e.message}));
})




// DELETE
app.delete('/api/product/:id', (req, res) => {

    DB.deleteProduct(req.params.id) 
    .then(product => {

        res.send(product);
    })
    .catch(e=> res.json({message: e.message}));
})



// UPDATE
app.put('/api/product/:id', (req, res) => {

    DB.updateProduct(req.params.id, req.body) 
    .then(product => {

        res.send(product);
    })
    .catch(e=> res.json({message: e.message}));
})






















app.get('/countries', (req, res) => {

    DB.getCountries() 
    .then(countries => {

        res.send(countries);
    })
    .catch(e=> res.json({message: e.message}));
})


app.get('/cities/:id', (req, res) => {

    DB.getCities(req.params.id) 
    .then(cities => {

        res.send(cities);
    })
    .catch(e=> res.json({message: e.message}));
})



app.post('/addCountry', (req, res) => {

    DB.addCountry(req.body.countryToAdd) 
    .then(newCountryId => {

        res.json(newCountryId);
    })
    .catch(e=> res.json({message: e.message}));
})












