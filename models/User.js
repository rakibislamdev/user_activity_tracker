const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: String,
    name: String,
    email: String,
    designation: String,
}, { timestamps: true });