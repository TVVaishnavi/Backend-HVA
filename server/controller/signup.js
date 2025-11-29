const userService = require('../service/signup');
const User = require('../model/user');

function createUserController(req, res){
    const userData = req.body;

    userService.createUser(userData)
        .then((newUser) =>{
            res.status(201).json({message: 'User created successfully', userId: newUser._id});
        })
        .catch((error) =>{
            res.status(400).json({error: error.message});
        })
    
}

module.exports = {createUserController};