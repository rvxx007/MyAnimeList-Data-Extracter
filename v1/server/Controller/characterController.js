import axios from "axios"
import * as cheerio from "cheerio";
import { response } from "express";


const getCharacter = async(req, res)=>{
    try {
    const {limit} = req.query;

    const characterList = []

    await axios?.get(!limit?'https://myanimelist.net/character.php':`https://myanimelist.net/character.php?limit=${limit}`)
    .then((response)=>{
        const html = response.data;
        const $ = cheerio.load(html);

        $('tr.ranking-list').each(function(){
            const srno = $(this).find('td.rank').text().trim();
            const chPath =$(this).find('td.people').find('div.information').find('a.fs14').attr('href').slice(33);
            const img = $(this).find('td.people').find('a').find('img').attr('data-src');
            const ename =$(this).find('td.people').find('div.information').find('a.fs14').text();
            const jname =$(this).find('td.people').find('div.information').find('span.fs12').text();
            const animeography = $(this).find('td.animeography').find('div.title').append(',').text().split(',');
            const mangaography = $(this).find('td.mangaography').find('div.title').append(',').text().split(',');
            const favorites = $(this).find('td.favorites').text().trim();
             
            characterList.push({srno,chPath,img,ename,jname,animeography,mangaography,favorites})
        })
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            msg:"Server Unavailable",
            error:err
        })
    })

    res.status(200).json(characterList);

    } catch (error) {
        res.status(500).json({
            success:false,
            msg:"Server Unavailable",
            error:error
        })
    }
}

const getCharacterDetails = async(req, res)=>{

   try {
    
        // const {urlPath} = req.query;
        const urlPath = "417/Lelouch_Lamperouge";
        const url = `https://myanimelist.net/character/${urlPath}`;
        
        const characterDetailsList = []

        await axios.get(url,{
            maxBodyLength:Infinity,
            "redirect":"follow",
            "Content-Type":"application/json"
        })
        .then((response)=>{
            const html = response.data;
            const $ = cheerio.load(html);

            $('#contentWrapper').each(function(){
                const title = $(this).find('div.edit-info').find('h1.title-name').text();
                const img =  $(this).find('img').attr('data-src');
                const ejname = $(this).find('h2.normal_header').text()
                

                characterDetailsList.push({title,img,ejname})
            })
        })
        res.status(200).json(characterDetailsList);
   } catch (error) {
    
   }
}


export {getCharacter,getCharacterDetails}