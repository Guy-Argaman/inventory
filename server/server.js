import express from 'express';
import inventoryRoutes from './routes/inventoryRoutes.js';
import bodyParser from "body-parser";
import { connectDB } from './config/db.js';
import cors from 'cors';

const app = express();
// body parser allows us to use incoming request data in req.body
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/inventory', inventoryRoutes);

app.use('/', (req, res) => {
    res.send('Welcome to the server');
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
    connectDB();
});