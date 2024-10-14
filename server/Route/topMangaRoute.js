import express from 'express';
import { mangaServices } from '../Controller/topMangaController.js'

const MangaRouter = express.Router();

MangaRouter.get('/get/all', mangaServices);

export default MangaRouter