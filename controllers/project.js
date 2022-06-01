import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/errorResponse.js';
import Project from '../models/projectModel.js'

export const getAllProjects = asyncHandler(async (req, res, next) => res.send('GET all'));

export const createProject = asyncHandler(async (req, res) => {
    const { body: {title, description, url, author } } = req;
    
    const newProject = await Project.create({
        title, description, url, author
    });

    console.log(newProject)
    console.log(title, description, url, author)
    res.send('POST new Project')});

export const getSingleProject = asyncHandler(async (req, res) => res.send('GET single'));

export const updateProject = asyncHandler(async (req, res) => res.send('PUT'));

export const deleteProject = asyncHandler(async (req, res) => res.send('DELETE'));
