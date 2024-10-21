const Institute = require('../models/institute');

exports.getInstitutes = async (req, res) => {
  try {
    const institutes = await Institute.find();
    res.status(200).json(institutes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
