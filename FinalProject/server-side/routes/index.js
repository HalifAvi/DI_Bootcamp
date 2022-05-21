import express from 'express';
import router from './users.js';

const app = express();


export default app.use('/api/users', router);
