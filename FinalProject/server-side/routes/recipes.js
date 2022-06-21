import express from 'express';
import {insertRecipe, insertFavRecpie, decreaseAmountDailyRecipe, removeFavRecpie, getAllSpecificDateUserRecpies, removeDailyRecipe, insertExistDailyRecipe} from '../controllers/recipes.js';


const router = express.Router();



// PAY ATTENTION TO THE ORDER !!!! 
router.post('/insertNewRecipe', insertRecipe);
router.post('/insertNewFavoriteRecipe', insertFavRecpie);
router.delete('/removeFavRecipe', removeFavRecpie);
router.delete('/removeDailyRecipe', removeDailyRecipe);
router.put('/insertExistDailyRecipe', insertExistDailyRecipe);
router.put('/decreaseAmountDailyRecipe', decreaseAmountDailyRecipe);
router.get('/allSpeDateUserRecpies', getAllSpecificDateUserRecpies)






export default router;

