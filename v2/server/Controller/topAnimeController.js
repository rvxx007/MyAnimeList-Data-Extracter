import * as cheerio from 'cheerio'
import axios from 'axios';



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

const topAnimeListService = async(req ,res)=>{
    
try {
    const { next, type } = req.query;
    
    console.log(next);
    
    const url = !type?`https://myanimelist.net/topanime.php?limit=${next || 0}`
                    :`https://myanimelist.net/topanime.php?type=${type}&limit=${next}`;
    
    const TopAnimeList = []
    await axios(url).then(response=>{
        const html = response.data;
        const $ = cheerio.load(html);
    
        $('tr.ranking-list').each(function() {
            const srNo = $(this).find('td.rank').find('span').text()
            const link = $(this).find('td.title').find('a.hoverinfo_trigger').attr('href');
            const img = $(this).find('td.title').find('a.hoverinfo_trigger').find('img').attr('data-src');
            const name = $(this).find('td.title').find('div.detail').find('a.hoverinfo_trigger').text()
            const info = $(this).find('td.title').find('div.detail').find('div.information').text().split("\n        ").slice(1,3)
            const score = $(this).find('td.score').find('span.score-label').text();
            
            TopAnimeList.push({srNo,name,link,img,info,score})
        })

        resFun(res,200,"Success",TopAnimeList)
    })

} catch (error) {

   ErrFun(res,500,error,"Server Unreachable.");
}
}


export {topAnimeListService}