import express from 'express';
import {allAnimeAndMangaNews}  from "../Controller/anime&manga-newsController.js";

const AnimeAndMangaNewsRouter = express.Router();

AnimeAndMangaNewsRouter.get('/get/all',allAnimeAndMangaNews)
// AnimeAndMangaNewsRouter.get('/get/all/anime-news',allAnimeAndMangaNews)
// AnimeAndMangaNewsRouter.get('/get/all/manga-news',allAnimeAndMangaNews)
// AnimeAndMangaNewsRouter.get('/get/all/people-news',allAnimeAndMangaNews)
// AnimeAndMangaNewsRouter.get('/get/all/music-news',allAnimeAndMangaNews)
// AnimeAndMangaNewsRouter.get('/get/all/events-news',allAnimeAndMangaNews)
// AnimeAndMangaNewsRouter.get('/get/all/industry-news',allAnimeAndMangaNews)

export default AnimeAndMangaNewsRouter