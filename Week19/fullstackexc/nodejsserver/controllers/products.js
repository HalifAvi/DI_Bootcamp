const { 
    getAllProducts,
    getProduct,
    searchProduct,
    addProduct,
    deleteProduct,
    updateProduct 
} = require('../modules/db-products.js');






// CRUD - CREATE READ UPDATE DELETE

// READ - get method
const _getAllProducts = (req, res) => {

    getAllProducts() 
    .then(data => {

        res.send(data);
    })
    .catch(e=> res.json({message: e.message}));
}


// READ - get method
const _getProduct = (req, res) => {

    getProduct(req.params.id) 
    .then(product => {

        res.send(product);
    })
    .catch(e=> res.json({message: e.message}));
}

// READ - get method : search according to name 
//  http://localhost:5000/api/product?q=ip
const _searchProduct = (req, res) => {

    searchProduct(req.query.q) 
    .then(product => {

        res.send(product);
    })
    .catch(e=> res.json({message: e.message}));
}





// CREATE - post method
// In postman choose 'POST' & 'body'->change to 'json'->and to 'raw' 
const _addProduct = (req, res) => {

    addProduct(req.body) 
    .then(newProduct => {

        res.json(newProduct);
    })
    .catch(e=> res.json({message: e.message}));
}




// DELETE
const _deleteProduct = (req, res) => {

    deleteProduct(req.params.id) 
    .then(product => {

        res.send(product);
    })
    .catch(e=> res.json({message: e.message}));
}



// UPDATE
const _updateProduct = (req, res) => {

    updateProduct(req.params.id, req.body) 
    .then(product => {

        res.send(product);
    })
    .catch(e=> res.json({message: e.message}));
}



module.exports = {

    _getAllProducts,
    _getProduct,
    _searchProduct,
    _addProduct,
    _deleteProduct,
    _updateProduct 
}