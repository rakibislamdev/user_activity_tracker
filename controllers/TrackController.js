const Track = require('../models/Track');
const multer = require('multer');

// ------------- Add new track ------------------ \\
const store = (req, res, next) => {
    // here i want to upload image using multer
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    });

    const upload = multer({ storage: storage });

    let track = new Track({
        login: req.body.login,
        performance: req.body.performance,
        interval: req.body.interval,
        image: req.file.path,
    });

    track.save()
        .then(response => {
            res.json({ message: 'Track Added Successfully!' });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'An error occurred!' });
        });

}


// ------------- Show single track ------------------ \\
const showTrack = (req, res, next) => {
    let track_id = req.body.track_id;
    Track.findById(track_id)
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'An error occurred!' });
        });
};

module.exports = {
    store, showTrack
}