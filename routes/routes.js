const express = require('express');
const router = express.Router();
const multer = require('multer');

const UserController = require('../controllers/UserController');
const TrackController = require('../controllers/TrackController');
const LoginController = require('../controllers/LoginController');

// multer middleware
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// user routes
router.get('/', UserController.index);
router.post('/show', UserController.showUser);
router.post('/add-user', UserController.store);

// login routes
router.post('/login', LoginController.login);

// track routes
router.post('/add-track', upload.single('image'), TrackController.store);
router.post('/show-track', TrackController.showTrack);
router.post('/show-track-by-login', TrackController.showTrackByLogin);

module.exports = router;