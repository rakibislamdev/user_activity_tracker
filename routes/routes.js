const express = require('express');
const router = express.Router();
const upload = require('../config/multer');

const UserController = require('../controllers/UserController');
const TrackController = require('../controllers/TrackController');
const LoginController = require('../controllers/LoginController');


// user routes
router.get('/all-users', UserController.getAllUsers);
router.post('/show', UserController.showUser);
router.post('/add-user', UserController.createUser);

// login routes
router.post('/login', LoginController.login);

// track routes
router.post('/add-track', upload.single('image'), TrackController.store);
router.post('/show-track', TrackController.showTrack);
router.post('/show-track-by-login', TrackController.showTrackByLogin);

module.exports = router;