const express = require('express');
const router = express.Router();

const { 
    _getAllProducts,
    _getProduct,
    _searchProduct,
    _addProduct,
    _deleteProduct,
    _updateProduct 
   } = require('../controllers/products.js');



router.get('/', _getAllProducts);
router.get('/:id', _getProduct);
router.get('/q', _searchProduct);
router.post('/', _addProduct);
router.delete('/:id', _deleteProduct);
router.put('/:id', _updateProduct);



module.exports = router;