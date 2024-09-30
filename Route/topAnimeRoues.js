import express from 'express';
import { topAnimeListService } from '../Controller/topAnimeController.js';


const TopAnimeRoute = express.Router();

TopAnimeRoute.get('/get/all',topAnimeListService);
TopAnimeRoute.get('/get/all-specific/',topAnimeListService);
TopAnimeRoute.get('/get/all-top-upcoming/',topAnimeListService);
TopAnimeRoute.get('/get/all-tv-series/',topAnimeListService);
TopAnimeRoute.get('/get/all-movie/',topAnimeListService);
TopAnimeRoute.get('/get/all-ova/',topAnimeListService);
TopAnimeRoute.get('/get/all-ona/',topAnimeListService);
TopAnimeRoute.get('/get/all-specials/',topAnimeListService);
TopAnimeRoute.get('/get/all-most-popular/',topAnimeListService);
TopAnimeRoute.get('/get/all-most-favorite/',topAnimeListService);

export default TopAnimeRoute 