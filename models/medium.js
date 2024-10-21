const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MediumSchema = new Schema({
  mediumName: { type: String, required: true },  // e.g., English, Hindi
});

module.exports = mongoose.model('Medium', MediumSchema);
