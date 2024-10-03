import express from 'express';
import { mangaServics } from './topMangaRoute.js'

const MangaRouter = express.Router();

MangaRouter.get('/get/all/', mangaServics);

export default MangaRouter