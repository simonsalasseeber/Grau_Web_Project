const {getProjectsService} = require("../services/service");

const mainController = async (req, res) => {
    try {
        const allProjects = await getProjectsService();
        res.send(allProjects);
    } catch (error) {
        res.json({message: error.message})
    }    
};

module.exports = mainController;