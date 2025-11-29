const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('../utils/jwt');

const loginService = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid password");
    }

    const token = jwt.generateToken(user);
    return {
        token: token,
        email: user.email,
        role: user.role
    };
};

const refreshToken = async(oldToken) =>{
    try {
        const decoded = jwt.verifyToken(oldToken);
        const _id = decoded.id;
        const user = await User.findById(_id);
        if(!user){
            throw new Error('User not found');
        }
        const newToken = jwt.generateToken(user);
        return {token: newToken};
    }catch(error){
        console.log(error);
        throw new Error('Invalid token');
    }
}

module.exports = {loginService, refreshToken};