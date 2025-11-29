const crypto = require('crypto');

const secretKey = crypto.randomBytes(64).toString('hex');
module.exports = {
    secretKey: "my_super_secret_key_123456789"
};
