const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassCategorySchema = new Schema({
  categoryName: { type: String, required: true },  // e.g., Pre-primary, Secondary
});

module.exports = mongoose.model('ClassCategory', ClassCategorySchema);
