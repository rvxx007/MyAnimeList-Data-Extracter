import axios  from "axios";
import * as cheerio from 'cheerio';


function Success(res,code,msg,data){
    res.status(code).send({
        "success":true,
        "msg":msg,
        "data": data 
    })
}

function Error(res,code,error,msg){
     res.status(code).send({
        "success":false,
        "msg":msg,
        "error":error
    })
}

const allAnimeAndMangaNews= async(req, res)=>{
    try {

        const {page} =req.body || req.query;
        
        const url = `https://myanimelist.net/news?p=${page || 1}`
        
        const AnimeAndMangaNewsList = [];

        axios(url).then(response=>{
            const html = response.data;
            const $ = cheerio.load(html);
            $('div.news-unit').each(function(){

                const link = $(this).find('a.image-link').attr('href')
                const img = $(this).find('img.image').attr('src')
                const title  = $(this).find('div.news-unit-right').find('p.title').text().trim();
                const text = $(this).find('div.text').text().trim();
                const timeStamp = $(this).find('div.information').find('p.info').text().trim().split("by").at(0);
                const tags = $(this).find('div.information').find('p.tags').find('a.tag').text().trim().split(" ")
                AnimeAndMangaNewsList.push({title,link,img,text,timeStamp,tags});
            });
            
            Success(res,200,"Success",AnimeAndMangaNewsList);
        })

    } catch (error) {
        Error(res,500,error,"Server Unreachable");
    }
}

export {allAnimeAndMangaNews}