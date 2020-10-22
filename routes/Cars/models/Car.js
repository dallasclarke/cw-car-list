const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    name: {type: String, unique: true, lowercase: true, unique: true},
    type: {type: String, required: true},
    year: {type: String, required: true},
    timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model('car', CarSchema);