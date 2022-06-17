import express from 'express';
import {insertRecipe, insertFavRecpie} from '../controllers/recipes.js';


const router = express.Router();



// PAY ATTENTION TO THE ORDER !!!! 
router.post('/insertNewRecipe', insertRecipe);
router.post('/insertNewFavoriteRecipe', insertFavRecpie);

export default router;

