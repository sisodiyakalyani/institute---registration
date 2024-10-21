const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StandardSchema = new mongoose.Schema({
  classCategory: { type: Schema.Types.ObjectId, ref: 'ClassCategory' },
  standardName: { type: String, required: true },  // e.g., LKG, 8th
});

const Standard = mongoose.models.Standard || mongoose.model('Standard', StandardSchema);

module.exports = Standard;
