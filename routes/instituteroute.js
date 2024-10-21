const express = require('express');
const router = express.Router();
const instituteController = require('../controller/institute controller.js');

router.get('/institutes', instituteController.getInstitutes);

module.exports = router;
