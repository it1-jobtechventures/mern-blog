import express from 'express';
import { addCategory, allCategories, removeCategory } from '../controllers/categoryController.js';

const categoryRouter = express.Router();

categoryRouter.post('/add', addCategory);
categoryRouter.get('/allCategories', allCategories);
categoryRouter.post('/remove', removeCategory);

export default categoryRouter;