const Project = require("../models/Project");

const getProjectsService = async () => {
    const allProjects = await Project.find();
    return allProjects;
}

const addProjectService = async ({title, producer, video}) => {
    const newProject = new Project({title, producer, video})
    const savedProject = await newProject.save();
    return savedProject;
}

const deleteProjectService = async ({title, producer, video}) => {
    const deletedProject = await Project.findOneAndReplace({title, producer, video})
    return deletedProject;
}

module.exports = { 
    getProjectsService,
    addProjectService,
    deleteProjectService
}
