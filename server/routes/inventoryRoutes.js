import express from 'express';
import { addItem } from '../controllers/inventoryController.js';

const router = express.Router();
router.post('/', addItem);
// router.get('/showInvetory', showInventory);
// router.get('/:id', getInventoryByID);

export default router;