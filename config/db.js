require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    try {
        const { DB_URI } = process.env;
        mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const db = mongoose.connection;

        db.on('error', (err) => {
            console.log(err);
        });

        db.once('open', () => {
            console.log('Database connected Successfully');
        });
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports = connectDB;