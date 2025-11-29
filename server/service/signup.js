const User = require('../model/user')
const bcrypt = require('bcrypt');

function validatePassword(password){
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pattern.test(password);
}

const createUser = async(userData) =>{
    const {name, email, password} = userData;

    const existingUser = await User.findOne({email});
    if(existingUser){
        throw new Error('User with this email already exists');
    }

    if(!validatePassword(userData.password)){
        throw new Error('Password does not meet complexity requirements');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        name, 
        email,
        password: hashedPassword,
        role: 'user'
    })

    await newUser.save();
    return newUser;
}

module.exports = {createUser};