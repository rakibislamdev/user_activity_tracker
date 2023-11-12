const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({
    login: {
        type: String,
    },
    performance: {
        type: String,
    },
    interval: {
        type: String,
    },
    image: {
        type: String,
    },
}, { timestamps: true });


module.exports = mongoose.model('Track', trackSchema);