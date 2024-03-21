const express = require("express");
const mainRouter = require("./routes/mainRouter");
const adminRouter = require("./routes/adminRouter");
const loginRouter = require("./routes/loginRouter");
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express(); // app es todo mi servidor

// Morgan middleware (registro la req en formato combined)
app.use(morgan('combined'));

// Cors middleware (para manejar req, tema permisos)
app.use(cors()); // acá habilito para todos


// Para analizar datos de formularios URL-encoded
app.use(express.urlencoded({ extended: true })); 
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

// Routes --> middlewares especiales
app.use("/", mainRouter);
app.use("/admin", adminRouter);
app.use("/admin/login", loginRouter);
app.use("/logo", mainRouter)


module.exports = app;