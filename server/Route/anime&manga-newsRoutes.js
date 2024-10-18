import express from 'express';
import {allAnimeAndMangaNews}  from "../Controller/anime&manga-newsController.js";

const AnimeAndMangaNewsRouter = express.Router();

AnimeAndMangaNewsRouter.get('/get/all',allAnimeAndMangaNews)

export default AnimeAndMangaNewsRouter