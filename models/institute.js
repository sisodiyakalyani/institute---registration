const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstituteSchema = new Schema({
  name: { type: String, required: true },  // e.g., School, College, etc.
});

module.exports = mongoose.model('Institute', InstituteSchema);