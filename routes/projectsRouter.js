import { Router } from 'express';
import { 
    createProject, 
    deleteProject, 
    getAllProjects, 
    getSingleProject, 
    updateProject } from '../controllers/project.js';
import verifyToken from '../middlewares/verifyToken.js';
import validateJOI from '../middlewares/validateJOI.js';  //JOI is a schema validation library, validateJOI returns a request handler
import {projectCreate} from '../joi/schemas.js'          //importing schema to validate 

const projectsRouter = Router();

projectsRouter
.route('/')
.get(getAllProjects)
.post(verifyToken,validateJOI(projectCreate), createProject);  //protected route to .post createProject

projectsRouter
.route('/:id')
.get(getSingleProject)
.put(verifyToken, updateProject)
.delete( verifyToken, deleteProject);

export default projectsRouter;
