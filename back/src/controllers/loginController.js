const {checkLoginService} = require("../services/service");

const checkLoginController = async (req, res) => {
    try {
        const {username, password} = req.body;
        const isValid = await checkLoginService({username, password})
        if (isValid) {
            res.status(200).json(isValid)
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
        
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = checkLoginController;