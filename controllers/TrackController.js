const Track = require('../models/TrackModel');

// ------------- Add new track ------------------ \\
const store = (req, res, next) => {
    const uploadFile = req.file;

    let track = new Track({
        login: req.body.login,
        performance: req.body.performance,
        interval: req.body.interval,
        image: uploadFile.path,
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
            res.status(500).json({ message: 'Oops! An error occurred!' });
        });
};

// ------------ show track by login ----------------- \\
const showTrackByLogin = (req, res, next) => {
    let login = req.body.login;
    Track.find({ login: login })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Oops! An error occurred!' });
        });
};


module.exports = {
    store, showTrack, showTrackByLogin
}