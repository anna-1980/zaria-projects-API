import { Router } from 'express';
import { createProject, deleteProject, getAllProjects, getSingleProject, updateProject } from '../controllers/project.js';
import verifyToken from '../middlewares/verifyToken.js';

const projectsRouter = Router();

projectsRouter.route('/').get(getAllProjects).post(verifyToken, createProject);

projectsRouter.route('/:id').get(getSingleProject).put(updateProject).delete(deleteProject);

export default projectsRouter;
