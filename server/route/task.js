const express = require('express');
const router = express.Router();
const getAllTasks = require('../controller/task');
const authenticateUser   = require('../middleware/auth');

router.get('/tasks',  authenticateUser.authenticateToken, getAllTasks);

module.exports = router;