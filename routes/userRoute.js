// routes/userRoutes.js
const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Create a new user
        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
});

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
});

module.exports = router;
