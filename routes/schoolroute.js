// routes/schoolroute.js
const express = require('express');
const router = express.Router();
const Standard = require('../models/standard'); // Adjust the path to your model

// POST /api/school/standards
router.post('/standards', async (req, res) => {
    console.log('Request body:', req.body); // Debugging log
    try {
        const newStandard = new Standard(req.body);
        await newStandard.save();
        res.status(201).json(newStandard);
    } catch (error) {
        console.error('Error while saving standard:', error); // Error log
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
