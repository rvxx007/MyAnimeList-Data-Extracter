import express from 'express';
import { topAnimeListService } from '../Controller/topAnimeController.js';


const TopAnimeRoute = express.Router();

TopAnimeRoute.get('/get/all',topAnimeListService);

export default TopAnimeRoute 