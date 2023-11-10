const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const TrackController = require('../controllers/TrackController');

// user routes
router.get('/', UserController.index);
router.post('/show', UserController.showUser);
router.post('/add-user', UserController.store);

// track routes
router.post('/add-track', TrackController.store); 
router.post('/show-track', TrackController.showTrack);

module.exports = router;