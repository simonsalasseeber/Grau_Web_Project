const express = require("express");
const adminRouter = express.Router();
const {getAdminController, postAdminController, deleteAdminController} = require("../controllers/adminController");
const {projectValidation} = require("../middlewares/validations");


adminRouter.get("/", getAdminController);
adminRouter.post("/", projectValidation, postAdminController);
adminRouter.delete("/", deleteAdminController) // no validation for practical purposes

module.exports = adminRouter;