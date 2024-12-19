import express from 'express';
import {allAnimeAndMangaNews, animeNewsDetails}  from "../Controller/anime&manga-newsController.js";

const AnimeAndMangaNewsRouter = express.Router();

AnimeAndMangaNewsRouter.get('/get/all',allAnimeAndMangaNews)
AnimeAndMangaNewsRouter.get('/get/',animeNewsDetails);

export default AnimeAndMangaNewsRouter