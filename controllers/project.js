import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/errorResponse.js';
import Project from '../models/projectModel.js'

export const getAllProjects = asyncHandler(async (req, res, next) => {
    const projects = await Project.find();
    
    res.json(projects);
});
export const createProject = asyncHandler(async (req, res) => {
    // const { body: {title, description, url, author }, user:{name: userName} } = req;
    const { body , user:{ _id} } = req; //access to user because it is in the verification Token req. - req.user = user;
                                        // user is from verifyToken = const user = await User.findById(_id);
    const newProject = await Project.create({
        ...body, author: _id
    });

    console.log(newProject)
    // console.log(title, description, url, author)
    res.send('POST new Project')});

export const getSingleProject = asyncHandler(async (req, res) => {
   const {
       params: {id}
   } = req;
   const project = await Project.findById(id).populate('author');
   if(!project) throw new ErrorResponse(`Project with id of ${id} not found`, 404)
    res.json(project)
});

export const updateProject = asyncHandler(async (req, res) => res.send('PUT'));

export const deleteProject = asyncHandler(async (req, res) => res.send('DELETE'));
