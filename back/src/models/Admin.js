const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); 

// Admin schema
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    hashedPassword: {
        type: String,
        required: true
    }
}, { collection: 'admin' })


adminSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.hashedPassword);
};

        
    
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;

