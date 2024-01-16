const express = require('express');
const userRouter = require('./routes/userRoutes');

const app = express();

// Middleware to parse JSON in request bodies
app.use(express.json());

// Routes
app.use('/api/v1', userRouter);

module.exports = app;
