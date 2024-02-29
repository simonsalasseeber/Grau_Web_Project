const {addProjectService, deleteProjectService} = require("../services/service")

const getAdminController = (req, res) => {
    res.send("Admin page will soon be available");
}

const postAdminController = async (req, res) => {
    try {
        const {title, producer, video} = req.body;
        const createdProject = await addProjectService({title, producer, video});
        res.json(createdProject);
    } catch (error) {
        res.json({message: error.message})
    }
}

const deleteAdminController = async (req, res) => {
    try {
        const {title, producer, video} = req.body;
        const deleteProject = await deleteProjectService({title, producer, video})
        res.json(deleteProject);
    } catch (error) {
        res.json({message: error.message})
    }
}



module.exports = {
    getAdminController,
    postAdminController,
    deleteAdminController
}