import express from 'express';
import { getCharacter ,getCharacterDetails } from '../Controller/characterController.js';

const characterRouter = express.Router();

characterRouter.get('/get',getCharacter);
characterRouter.get('/get/chdetails',getCharacterDetails)


export default characterRouter