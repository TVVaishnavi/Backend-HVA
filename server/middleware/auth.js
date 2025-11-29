const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/jwtConfig');

const authenticateToken = (req, res, next)=>{
    const authHeader = req.headers['authorization'];
    
    if(!authHeader){
        return res.status(401).json({message: "Authorization header missing"});
    }
    const [bearer, token] = authHeader.split(' ');
    if(bearer != 'Bearer' || !token){
        return res.status(401).json({message: "Invalid authorization format"});
    }

    jwt.verify(token, secretKey, (error, user) => {
        if(error){
            console.log(error);
            return res.status(403).json({message: "Invalid or expired token"});
        }
        req.user = user;
        next();
    })
}

const verifyToken = (token)=>{
    return jwt.verify(token,secretKey)
}

module.exports = {authenticateToken, verifyToken};
