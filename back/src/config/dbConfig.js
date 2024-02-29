const mongoose = require('mongoose');
require("dotenv").config();

const dbConfig = async () => {
   try {
       await mongoose.connect(process.env.URL_GRAU);
       console.log('Database connected successfully');
   } catch (error) {
       console.error('Error connecting to the database:', error.message);
       throw error; // Rethrow the error to be caught by the caller
   }
};

module.exports = dbConfig;
