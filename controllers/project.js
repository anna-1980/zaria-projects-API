import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/errorResponse.js';

export const getAllProjects = asyncHandler(async (req, res, next) => res.send('GET all'));

export const createProject = asyncHandler(async (req, res) => res.send('POST'));

export const getSingleProject = asyncHandler(async (req, res) => res.send('GET single'));

export const updateProject = asyncHandler(async (req, res) => res.send('PUT'));

export const deleteProject = asyncHandler(async (req, res) => res.send('DELETE'));
