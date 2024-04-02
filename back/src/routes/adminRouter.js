const express = require("express");
const adminRouter = express.Router();
const { postAdminController, deleteAdminController, getMainProjectController} = require("../controllers/adminController");
const {projectValidation, adminValidation} = require("../middlewares/validations");



adminRouter.get("/mainProject", getMainProjectController);
adminRouter.post("/", adminValidation);
adminRouter.post("/upload", projectValidation, postAdminController);
adminRouter.delete("/:title", deleteAdminController) // no validation for practical purposes

module.exports = adminRouter;