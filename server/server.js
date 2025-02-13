import express from 'express';
import userRoutes from './routes/userRoutes.js';
import bodyParser from "body-parser";
import { connectDB } from './config/db.js';

const app = express();
// body parser allows us to use incoming request data in req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);

app.use('/', (req, res) => {
    res.send('Welcome to the server');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    connectDB();
});