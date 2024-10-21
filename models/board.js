const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
  boardName: { type: String, required: true },  // e.g., CBSE, GSAB
});

module.exports = mongoose.model('Board', BoardSchema);