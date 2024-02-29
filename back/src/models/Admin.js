const mongoose = require("mongoose");

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
})

// do not return it to client
adminSchema.set("toJSON", {
        transform: (document, returnedObject) => {
            delete returnedObject.hashedPassword
            
        }})
        
    
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;

