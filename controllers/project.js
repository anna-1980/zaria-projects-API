import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/errorResponse.js';
import Project from '../models/projectModel.js'

export const getAllProjects = asyncHandler(async (req, res, next) => {
    const projects = await Project.find().populate('author');
    
    res.json(projects);
});
export const createProject = asyncHandler(async (req, res) => {
    // const { body: {title, description, url, author }, user:{name: userName} } = req;
    const { body , user:{ _id} } = req; //access to user because it is in the verification Token req. - req.user = user;
                                        // user is from verifyToken = const user = await User.findById(_id);
    const newProject = await Project.create({
        ...body, author: _id
    });

    // console.log(newProject)
    res.json(newProject)});

export const getSingleProject = asyncHandler(async (req, res) => {
   const {params: {id}} = req;
   const project = await Project.findById(id).populate('author');
   if(!project) throw new ErrorResponse(`Project with id of ${id} not found`, 404)
    res.json(project)
});

export const updateProject = asyncHandler(async (req, res) => {
    const {
        user,
        params: { id },
        body: {title, body, author}
    } = req;
    // console.log(user) //check what details get back from verifyToken
    const projectToUpdate = await Project.findById(id)
    if(user.id !== projectToUpdate.author.toString()){ 
        throw new ErrorResponse( `Only the author is allowed to edit`, 403 )}
    const updatedProject = await Project.findOneAndUpdate(
        {_id: id},
        {title, body, author},
        { new: true}
    )
  if(!updateProject)
        throw new ErrorResponse( `Post with id of ${id} not found`, 404 )   
    res.json(updatedProject);
});

export const deleteProject = asyncHandler(async (req, res) => {
    const {  
        user,
        params: { id },
        body: {title, body, author},
    } = req;
    const projectToUpdate = await Project.findById(id);
    // console.log(projectToUpdate)
    if(user.id !== projectToUpdate.author.toString()){ 
        throw new ErrorResponse( `Only the author is allowed to delete a project`, 403 )}
    const deleteProject = await Project.findOneAndDelete(
            {_id: id},
        );
    // console.log(projectToUpdate.title)
        if(!deleteProject)
        throw new ErrorResponse( `Post with id of ${id} not found`, 404 )
    res.json({ success: `Project with title: ${projectToUpdate.title} was DELETED successfully`})
});
