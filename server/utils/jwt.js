const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/jwtConfig');

function generateToken(user){
    const payLoad = {
        id: user._id,
        email: user.email,
        role: user.role
    }

    const token = jwt.sign(payLoad, secretKey, {expiresIn: '1h'});
    return token;
}

module.exports = {generateToken};