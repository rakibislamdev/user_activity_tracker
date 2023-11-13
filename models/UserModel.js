const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true,
    },
    designation: {
        type: String,
        required: true,
    },
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema);