import express from 'express';
import loginController from '../controllers/loginController.js'; // Update the file path


const router = express.Router();

router.post('/login',loginController);

export default router;
