const loginController = require('../controller/login');
const express = require('express');
const router = express.Router();

router.post('/login', loginController.login); 

module.exports = router;