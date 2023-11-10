const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    designation: {
        type: String,
    },
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema);