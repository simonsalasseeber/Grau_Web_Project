const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');

const projectValidation = (req, res, next) => {
    const {title, producer, video} = req.body;
    try {
        if (!title || !producer || !video) {
        return new Error("Missing information");
    }
    next();
    } catch (error) {
        res.send(error)
    }   
    return null;
}

const adminValidation = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            return res.status(400).send("Missing information");
        }

        // Fetch the admin document from the database
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(400).send("Invalid username or password");
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, admin.hashedPassword);
        if (!isMatch) {
            return res.status(400).send("Invalid username or password");
        }

        // If the passwords match, proceed to the next middleware or route handler
        next();
    } catch (error) {
        res.status(500).send("Server error");
    }
};

module.exports = {projectValidation, adminValidation};