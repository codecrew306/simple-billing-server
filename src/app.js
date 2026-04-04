import express from 'express';
import { INTERNAL_SERVER_ERROR } from './constants/statusCodes.js';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(INTERNAL_SERVER_ERROR).json({ error: 'Something went wrong!' });
});

export default app;
