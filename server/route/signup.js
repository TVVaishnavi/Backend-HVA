const user = require('../controller/signup');
const express = require('express');
const router = express.Router();


router.post('/register', user.createUserController);

module.exports = router;