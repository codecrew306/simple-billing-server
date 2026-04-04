// Application configuration
// Setup middleware, routes, error handling

import express from 'express';
import { INTERNAL_SERVER_ERROR } from './constants/statusCodes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// import routes from './routes/index.js';
// app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(INTERNAL_SERVER_ERROR).json({ error: 'Something went wrong!' });
});

export default app;
