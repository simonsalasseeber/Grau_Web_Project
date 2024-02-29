const express = require("express");
const mainRouter = require("./routes/mainRouter");
const adminRouter = require("./routes/adminRouter");
const morgan = require('morgan');
const cors = require('cors')
const app = express(); // app es todo mi servidor

// Morgan middleware (registro la req en formato combined)
app.use(morgan('combined'));

// Cors middleware (para manejar req, tema permisos)
app.use(cors()); // acá habilito para todos

// Middleware para analizar solicitudes con formato JSON
app.use(express.json());

// Para analizar datos de formularios URL-encoded
app.use(express.urlencoded({ extended: true })); 


// Routes --> middlewares especiales
app.use("/", mainRouter);
app.use("/admin", adminRouter);


module.exports = app;