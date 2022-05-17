import express from 'express';
const router = express.Router();
import {_register} from '../controllers/Users.js';



router.post('/register', _register);

export default router;



