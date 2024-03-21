const Project = require("../models/Project");
const Admin = require("../models/Admin");
const MainProject = require("../models/MainProject");

const getProjectsService = async () => {
    const allProjects = await Project.find();
    return allProjects;
}

const getMainProjectService = async () => {
    const mainProject = await MainProject.find();
    return mainProject;
}

const addProjectService = async ({title, producer, video, image, isMain}) => {
    if (isMain) {
        const newMainProject = new MainProject({title, producer, video, image, isMain})
        const savedProject = await newMainProject.save();
        await updateMainProjectService(title);
        return savedProject;
    } else {
        const newProject = new Project({title, producer, video, image})
        const savedProject = await newProject.save();
        return savedProject;
    }
}

const deleteProjectService = async ({title}) => {
    const deletedProject = await Project.findOneAndDelete({title})
    return deletedProject;
}

const checkLoginService = async ({username, password}) => {
    try {
        const user = await Admin.findOne({ username });
        if (!user) {
          return false;
        }
        
        const isMatch = await user.comparePassword(password);
        console.log(isMatch);
        return isMatch;
     } catch (error) {
        console.error('Error checking admin credentials:', error);
        throw error; 
     }
    };

const updateMainProjectService = async (title) => {
    const newMainProject = await MainProject.findOne({ title });

    if (!newMainProject) {
        console.error('New main project not found.');
        return;
    }
    const previousMainProject = await MainProject.findOneAndUpdate(
        { isMain: true, title: { $ne: title } }, // Excluding the new main project
        { isMain: false }
    );

    if (previousMainProject) {
        console.log('Previous main project updated successfully.');
    } else {
        console.log('No previous main project found.');
    }
}


module.exports = { 
    getProjectsService,
    addProjectService,
    deleteProjectService,
    checkLoginService,
    getMainProjectService
}
