import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb://mongo:27017/db');
        console.log(`MongoDB connected: ${connection.connection.host}`);
    }
    catch (e) {
        console.error(`Error: ${e.message}`);
        return;
    }
}