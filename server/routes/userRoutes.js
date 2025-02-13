import express from 'express';
import { getUsers } from '../controllers/userController.js';
import { checkAuth as Auth } from '../middleware/auth.js';
import {getUserByID} from '../controllers/userController.js';

const router = express.Router();
router.get('/', getUsers);

router.get('/:id', getUserByID);
router.get('/about', Auth, getUsers);

export default router;