import express from 'express';
import { addUser, allUser, loginUser, removeUser } from '../controllers/userController.js';

const userRouter = express.Router();

// Admin-only routes
userRouter.post('/add' ,addUser);
userRouter.post('/remove', removeUser);
userRouter.get('/allUser', allUser);
// User routes
userRouter.post('/userLogin', loginUser);

export default userRouter;