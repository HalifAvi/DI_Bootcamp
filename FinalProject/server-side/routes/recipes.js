import express from 'express';
import {insertRecipe, insertFavRecpie, removeFavRecpie} from '../controllers/recipes.js';


const router = express.Router();



// PAY ATTENTION TO THE ORDER !!!! 
router.post('/insertNewRecipe', insertRecipe);
router.post('/insertNewFavoriteRecipe', insertFavRecpie);
router.delete('/removeFavRecipe', removeFavRecpie)

export default router;

