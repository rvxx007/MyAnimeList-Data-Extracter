import express from 'express';
import { getAnimeService } from '../Controller/animeController.js';
import { animeMinerMidware } from '../Miners/animeMM.js';

const animeRouter = express.Router();

animeRouter.get("/get/",getAnimeService);
animeRouter.get("/miner/start/",animeMinerMidware);


export default animeRouter