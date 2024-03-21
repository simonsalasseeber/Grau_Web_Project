const mongoose = require("mongoose");

const MainProjectSchema = new mongoose.Schema({
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
    },
    isMain: {
        type: Boolean
    }
    });


const MainProject = mongoose.model("MainProject", MainProjectSchema)

module.exports = MainProject;