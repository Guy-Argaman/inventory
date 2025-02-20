import mongoose from "mongoose";
import Inventory from "../models/inventory.js";

export const addItem = async (req, res) => {
    try {
        const item = new Inventory(req.body);
        await item.save();
        res.status(200).json(item);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const showInventory = async (req, res) => {
    try {
        const inventory = await Inventory.find();
        res.status(200).json(inventory);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const item = await Inventory.findById(id);
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        await Inventory.findByIdAndDelete(id);
        res.status(200).json({ item, id });
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateItem = async (req, res) => {
    try {
        const { id, stockAmount } = req.body.params;
        console.log(id);
        const item = await Inventory.findById(id);
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        await Inventory.findByIdAndUpdate(id, { stockAmount });
        res.status(200).json({ item, id });
    } catch (error) {
        res.status(500).send(error);
    }
};