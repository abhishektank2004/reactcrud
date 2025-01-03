import express from 'express';
import { signup, login } from '../controller/signupLoginController.js';

const router = express.Router();

// User Signup and Login routes
router.post('/signup', signup);
router.post('/login', login);

export default router;
