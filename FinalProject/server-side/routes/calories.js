import express from 'express';
import {updateCurrentCaloriesAmount} from '../controllers/calories.js';


const router = express.Router();



// PAY ATTENTION TO THE ORDER !!!! 
router.put('/updateCurrentCal', updateCurrentCaloriesAmount);



export default router;

