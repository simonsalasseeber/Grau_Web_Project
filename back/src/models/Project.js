const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
     },
     producer: {
        type: String,
        required: true
     },
     video: {
        type: String,
        required: true
     },
     image: { 
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }

     }
    });


const Project = mongoose.model("Project", projectSchema)

module.exports = Project;