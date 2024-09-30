import * as cheerio from 'cheerio'
import axios from 'axios';

const topAnimeListService = async(req ,res)=>{
    
try {
    const { next, type } =req.body || req.query;
    
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
            const info = $(this).find('td.title').find('div.detail').find('div.information').text()
            const score = $(this).find('td.score').find('span.score-label').text();
            
            TopAnimeList.push({srNo,name,link,img,info,score})
        })

        res.status(200).send({
            success:true,
            msg:'Success',
            data:TopAnimeList
        })
    })

} catch (error) {
    res.status(500).send({
        success:false,
        msg:'Error : '+error,
    })
}
}

export {topAnimeListService}