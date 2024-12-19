import express from 'express';
import { getTrailersData } from '../Controller/trailersController.js';

const trailersRouter = express.Router();

trailersRouter.get('/get',getTrailersData);

export default trailersRouter;