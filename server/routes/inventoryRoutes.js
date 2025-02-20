import express from 'express';
import { addItem, deleteItem, showInventory, updateItem } from '../controllers/inventoryController.js';

const router = express.Router();
router.post('/', addItem);
router.get('/show', showInventory);
router.delete('/delete/:id', deleteItem);
router.put('/update', updateItem)
// router.get('/:id', getInventoryByID);

export default router;