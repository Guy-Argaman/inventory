import mongoose from "mongoose";
import Inventory from "../models/inventory.js";

export const addItem = async (req, res) => {
    try {
        console.log('HELPPLEASEHELP', req.body);
        const item = new Inventory(req.body);
        await item.save();
        // const item = await Inventory.create(req.body);
        console.log('REQUEST HAS BEEN SENT');
        res.status(200).json(item);
    } catch (error) {
        res.status(500).send(error);
    }
};
