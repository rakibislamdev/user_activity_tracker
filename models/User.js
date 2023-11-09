const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    user_id: String,
    designation: String,
}, { timestamps: true });