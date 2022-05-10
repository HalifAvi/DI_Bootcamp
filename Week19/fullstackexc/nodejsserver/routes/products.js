const express = require('express');
const { getAllProducts, getProduct, searchProduct, addProduct } = require('../modules/db');
const router = express.Router();




router.get('/api/products', getAllProducts);
router.get('/api/product/:id', getProduct);
router.get('/api/product', searchProduct);
router.post('/api/product', addProduct);
// router.delete('/api/products', getAllProducts);
// router.put('/api/products', getAllProducts);



module.exports = router;