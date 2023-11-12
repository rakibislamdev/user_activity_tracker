const Track = require('../models/TrackModel');

// ------------- Add new track ------------------ \\
const addTrack = async (req, res, next) => {
    try {
        const { login, performance, interval, image } = req.body;
        const track = new Track({ login, performance, interval, image });

        await track.save();
        res.json({ status: true, message: 'Track added successfully!', data: track });

    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred!', errors: error });
    }
}


// ------------- Show single track ------------------ \\
const showTrack = async (req, res, next) => {
    try {
        const track = await Track.findOne({ track_id: req.params.track_id });
        if (!track) {
            return res.status(400).json({ status: false, message: 'No track found!' });
        }
        res.json({ status: true, message: 'Your command successfully executed.', data: track });

    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred!', errors: error });
    }
}

// ------------ show track by login ----------------- \\
const showTrackByLogin = async (req, res, next) => {
    try {
        const tracks = await Track.find({ login: req.body.login });
        if (tracks.length === 0) {
            return res.status(400).json({ status: false, message: 'No tracks found for the user!' });
        }

        res.json({ status: true, message: 'Your command successfully executed.', data: tracks });

    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred!', errors: error });
    }
};


module.exports = {
    addTrack, showTrack, showTrackByLogin
}