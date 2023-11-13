const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({
    login: {
        type: Number,
        required: true,
    },
    performance: {
        type: String,
        required: true,
    },
    interval: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, { timestamps: true });


module.exports = mongoose.model('Track', trackSchema);