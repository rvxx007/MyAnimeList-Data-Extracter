import express from 'express'
const app = express();
import cors from 'cors'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import mdb from './Configs/mongodbConfig.js';
import envObj from './Configs/envConfig.js';
import animeRouter from './Route/animeRouter.js';

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

app.get('/', (req,res)=>{
res.status(200).sendFile(path.join(__dirname+'/View/index.html'))
});

app.use(express.static('./public'))

app.use("/api/v2/anime", animeRouter)

const PORT = envObj.port || 5555;
app.listen(PORT, ()=>{
console.log("Server is Running On Port = "+PORT);

})