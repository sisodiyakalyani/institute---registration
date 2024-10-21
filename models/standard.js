// models/standard.js
const mongoose = require('mongoose');

const StandardSchema = new mongoose.Schema({
    classCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'ClassCategory' },
    standardName: { type: String, required: true }
});

module.exports = mongoose.model('Standard', StandardSchema);
