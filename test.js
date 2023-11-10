const express = require('express');
const mongoose = require('mongoose');
// const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database_name');

const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
});

db.once('open', () => {
    console.log('Database Connection Established!');
});

// Create a Mongoose Schema for User
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    id: String,
    designation: String,
});

const User = mongoose.model('User', userSchema);

// Create a Mongoose Schema for Track
const trackSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    performance: String,
    interval: String,
    image: String,
});

const Track = mongoose.model('Track', trackSchema);

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

// API 1: User Create
app.post('/api/user', async (req, res) => {
    try {
        const { name, email, id, designation } = req.body;
        const user = new User({ name, email, id, designation });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API 2: Login System
app.post('/api/login', async (req, res) => {
    // Implement your login logic here
});

// API 3: Add Track
app.post('/api/add-track', upload.single('image'), async (req, res) => {
    try {
        const { user_id, performance, interval } = req.body;
        const image = req.file.filename;

        const track = new Track({ user_id, performance, interval, image });
        await track.save();
        res.status(201).json(track);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API 4: Get Track by ID
app.get('/api/get-track/:id', async (req, res) => {
    try {
        const track = await Track.findById(req.params.id);
        res.json(track);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API 5: Get User Tracks
app.get('/api/user-tracks/:user_id', async (req, res) => {
    try {
        const tracks = await Track.find({ user_id: req.params.user_id });
        res.json(tracks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
