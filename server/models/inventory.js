import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
        unique: true
    },
    stockAmount: {
        type: Number,
        required: true,
        default: 0
    },
});

const inventoryModel = mongoose.model('Inventory', inventorySchema);
export default inventoryModel;