const { addProjectService, deleteProjectService, getMainProjectService} = require("../services/service")

const cloudinary = require("../utils/cloudinary");

const getMainProjectController = async (req, res) => {
    try {
        const mainProject = await getMainProjectService()
        res.send(mainProject);
    } catch (error) {
        res.json({message: error.message})
    }
}

const postAdminController = async (req, res) => {
    try {
        const {title, producer, video, image, isMain} = req.body;
        const result = await cloudinary.uploader.upload(image, {
            folder: "project"
        });
        const createdProject = await addProjectService({
            title,
            producer,
            video,
            image: {
                public_id: result.public_id,
                url: result.secure_url
            },
            isMain  
        });

        res.json(createdProject);
    } catch (error) {
        res.json({message: error.message})
    }
}

const deleteAdminController = async (req, res) => {
    try {
        const {title} = req.params;
        const deleteProject = await deleteProjectService({title})
        res.json(deleteProject);
    } catch (error) {
        res.json({message: error.message})
    }
}



module.exports = {
    postAdminController,
    deleteAdminController,
    getMainProjectController
}