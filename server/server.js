import express, { response } from 'express'
const app = express();
import dotenv from 'dotenv'
dotenv.config();
import bodyParser from 'body-parser';
import cors from 'cors'
import TopAnimeRoute from './Route/topAnimeRoues.js'
import AnimeAndMangaNewsRouter from './Route/anime&manga-newsRoutes.js'
import MangaRouter from './Route/topMangaRoute.js'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

app.use(cors())
app.use(express.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

app.get('/', (req,res)=>{
res.status(200).sendFile(path.join(__dirname+'/View/index.html'))
});

app.use(express.static('./public'))

app.use('/api/v1/top-anime',TopAnimeRoute);
app.use('/api/v1/anime-and-manga-news',AnimeAndMangaNewsRouter)
app.use('/api/v1/top-manga',MangaRouter)

const PORT = process.env.PORT || 5555;
app.listen(PORT, ()=>{
console.log("Server is Running On Port = "+PORT);

})