import { Router } from 'express';
import { createProject, deleteProject, getAllProjects, getSingleProject, updateProject } from '../controllers/project.js';

const projectsRouter = Router();

projectsRouter.route('/').get(getAllProjects).post(createProject);

projectsRouter.route('/:id').get(getSingleProject).put(updateProject).delete(deleteProject);

export default projectsRouter;
