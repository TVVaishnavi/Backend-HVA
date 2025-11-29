const {loginService, refreshToken: refreshTokenService} = require('../service/login');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await loginService(email, password);
        res.json(result);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

const refreshToken = async(req, res) =>{
    try {
        const {token} = req.body;
        const newToken = await loginService.refreshToken(token);
        res.json({token: newToken});
    }catch(error){
        res.status(401).json({message: error.message});
    }
}

module.exports = {login, refreshToken};