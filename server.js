require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/routes');
const connectDB = require('./config/db');
const app = express();

// Database
connectDB();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/user', routes);

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening at port http://localhost:${PORT}`);
});
