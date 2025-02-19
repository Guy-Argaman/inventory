import express from 'express';
import { addItem, showInventory } from '../controllers/inventoryController.js';

const router = express.Router();
router.post('/', addItem);
router.get('/show', showInventory);
// router.get('/:id', getInventoryByID);

export default router;