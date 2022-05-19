import express from 'express';
const router = express.Router();
import {_register, _login} from '../controllers/Users.js';


router.post('/register', _register);
router.post('/login', _login);

export default router;



