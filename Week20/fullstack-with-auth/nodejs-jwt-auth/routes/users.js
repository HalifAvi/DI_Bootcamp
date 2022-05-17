import express from 'express';
const router = express.Router();

const { 
    _getAllProducts,
    _getProduct,
    _searchProduct,
    _addProduct,
    _deleteProduct,
    _updateProduct 
   } = import('../controllers/users.js');



// PAY ATTENTION TO THE ORDER !!!! 
router.get('/search', _searchProduct);
router.get('/:id', _getProduct);
router.get('/', _getAllProducts);
router.post('/', _addProduct);
router.delete('/:id', _deleteProduct);
router.put('/:id', _updateProduct);



module.exports = router;