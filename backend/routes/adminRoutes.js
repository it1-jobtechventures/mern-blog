import express from 'express';
import { adminLogin } from '../controllers/adminController.js';

const adminRouter = express.Router();

// Admin Login Route
adminRouter.post('/adminLogin', adminLogin);

export default adminRouter;