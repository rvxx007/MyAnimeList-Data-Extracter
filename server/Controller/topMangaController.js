import * as cheerio from 'cheerio'
import axios from "axios";
import { response } from 'express';

function resFun(res,code,msg,obj){
    res.status(code).send({
        success:true,
        msg:msg,
        data: obj,   
    })
}

function ErrFun(res,code,error,msg){
    res.status(code).send({
        success: false,
        msg:msg,
        data:error
    })

}

const mangaServices = async(req, res)=>{

try {

const { next , type }=req.body || req.query;
const url = !type?`https://myanimelist.net/topmanga.php?limit=${next || 0}`:
            `https://myanimelist.net/topmanga.php?type=${type}&limit=${next || 0}`;

    const TopMangaList = [];
    await axios(url).then(response=>{
        const html = response.data;
        const $ = cheerio.load(html);
    
        $('tr.ranking-list').each(function() {
            const srNo = $(this).find('td.rank').find('span').text()
            const link = $(this).find('td.title').find('a.hoverinfo_trigger').attr('href');
            const img = $(this).find('td.title').find('a.hoverinfo_trigger').find('img').attr('data-src');
            const name = $(this).find('td.title').find('div.detail').find('a.hoverinfo_trigger').text()
            const info = $(this).find('td.title').find('div.detail').find('div.information').text().trim()
            const score = $(this).find('td.score').find('span.score-label').text();
            
            TopMangaList.push({srNo,name,link,img,info,score})
        })

    })

    const MangaInfo = [];
    // await axios(TopMangaList[0].link).then(response=>{
    //     const html = response.data;
    //     const $ = cheerio.load(html);

    //     $('tr').children(function(){
    //         const title = $(this).find('span.h1-title').text();
    //         const title0 =$(this).find('td.borderClass').find('div.spaceit_pad').find('span.dark_text').text();
    //         const type =$(this).find('td.borderClass').find('div.spaceit_pad').text();
    //         const img = $(this).find('td.borderClass').find('img').attr('src');
    //         const link = $(this).find('td.borderClass').find('a').first().attr('href');

    //         MangaInfo.push({title,type,img,link})
    //     })
    // })
   
    // console.log(MangaInfo);
    
    // TopMangaList.unshift(MangaInfo)
    
    resFun(res,200,"Success",TopMangaList)
} catch (err) {
    console.error(err);
    ErrFun(res,500,err,"Server Unreachable.");
}
    
}


export { mangaServices }