const {getProjectsService} = require("../services/service");

const mainController = async (req, res) => {
    try {
        const allProjects = await getProjectsService();
        res.send(allProjects);
    } catch (error) {
        res.json({message: error.message})
    }    
};
// const getLogoController = async (req, res) => {
//     try {
//         const logo = 
//         return logo;
//     } catch (error) {
//         console.error("Error fetching logo:", error);
//         res.status(500).json({ message: error.message });
//     }
// };

module.exports = mainController;