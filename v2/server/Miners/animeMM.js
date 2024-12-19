import * as cheerio  from 'cheerio'
import axios from 'axios';
import { TopAnime } from '../Model/topAnime.js';


const animeMinerMidware = async(req, res)=>{
    
    // let {next , type, start} = req.query;
    let next= 100, type=undefined, start=false;

    try {
        
        if(start===false){
            setInterval(async()=>{
                console.log(next);
                const TopAnimeList = []
                    
                    const url = !type?`https://myanimelist.net/topanime.php?limit=${next}`
                                    :`https://myanimelist.net/topanime.php?type=${type}&limit=${next}`;
                    
            
                    await axios(url).then((response)=>{
                        const html = response.data;
                        const $ = cheerio.load(html);
                    
                        $('tr.ranking-list').each(async function() {
                            const srno = $(this).find('td.rank').find('span').text()
                            const link = $(this).find('td.title').find('a.hoverinfo_trigger').attr('href');
                            const img = $(this).find('td.title').find('a.hoverinfo_trigger').find('img').attr('data-src');
                            const name = $(this).find('td.title').find('div.detail').find('a.hoverinfo_trigger').text()
                            const info = $(this).find('td.title').find('div.detail').find('div.information').text().split("\n        ").slice(1,3)
                            const score = $(this).find('td.score').find('span.score-label').text();
                            
                            TopAnimeList.push({srno,name,link,img,info,score})
                        })
                    })
                    await TopAnime.insertMany(TopAnimeList)
                    
                    next = next+50;
        
                }, 3000);

        }else{
            res.status(400).json({
                success:false,
                MinerStatus:start,
                msg:"Miner Is Stop"
            })
        }

    } catch (error) {
        res.status(500).json({
            success:false,
            msg:"Miner Is Stop",
            error:error
        })
    }
}
 

export {animeMinerMidware}